import json
import os

PATH = os.path.join('course', 'lessons')
JSON_PATH = os.path.join('course', 'toc.json')

if __name__ == '__main__':

    toc = {
        x: {
            y: {
                z.rstrip('.md'): os.path.join(PATH, x, y, z)
                for z in os.listdir(os.path.join(PATH, x, y))
            }
            for y in os.listdir(os.path.join(PATH, x))
        }
        for x in os.listdir(PATH)
    }

    with open(JSON_PATH, 'w') as f:
        f.write(json.dumps(toc, indent=4))

    # print(json.dumps(toc, indent=4))