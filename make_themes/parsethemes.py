#!/usr/bin/env python

import os
import glob

tfiles = glob.glob('./*.txt')

themes_css = ''

color_prefixes = ['primary', 'secondary-1', 'secondary-2']

for tfname in tfiles:
    name = os.path.splitext(os.path.basename(tfname))[0]
    cpi = -1

    themes_css += '.theme-{0} {{\n'.format(name)

    with open(tfname) as f:
        lines = f.readlines()
        for l in lines:
            l = l.strip()
            if l[:3] == '***':
                cpi += 1
                if cpi > 0:
                    themes_css += '\n'
            elif l[:5] == 'shade':
                lspl = l.split()
                c = lspl[1]
                hcode = lspl[3]

                themes_css += '    --{0}-{1}: {2};\n'.format(
                    color_prefixes[cpi], c, hcode)

    themes_css += '}'


print(themes_css)
