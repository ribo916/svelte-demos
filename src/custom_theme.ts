// You can also use the generator at https://skeleton.dev/docs/generator to create these values for you
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';
export const custom_theme: CustomThemeConfig = {
	name: 'custom_theme',
	properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-family-heading": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "255 255 255",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #1eceee 
		"--color-primary-50": "221 248 252", // #ddf8fc
		"--color-primary-100": "210 245 252", // #d2f5fc
		"--color-primary-200": "199 243 251", // #c7f3fb
		"--color-primary-300": "165 235 248", // #a5ebf8
		"--color-primary-400": "98 221 243", // #62ddf3
		"--color-primary-500": "30 206 238", // #1eceee
		"--color-primary-600": "27 185 214", // #1bb9d6
		"--color-primary-700": "23 155 179", // #179bb3
		"--color-primary-800": "18 124 143", // #127c8f
		"--color-primary-900": "15 101 117", // #0f6575
		// secondary | #28667d 
		"--color-secondary-50": "223 232 236", // #dfe8ec
		"--color-secondary-100": "212 224 229", // #d4e0e5
		"--color-secondary-200": "201 217 223", // #c9d9df
		"--color-secondary-300": "169 194 203", // #a9c2cb
		"--color-secondary-400": "105 148 164", // #6994a4
		"--color-secondary-500": "40 102 125", // #28667d
		"--color-secondary-600": "36 92 113", // #245c71
		"--color-secondary-700": "30 77 94", // #1e4d5e
		"--color-secondary-800": "24 61 75", // #183d4b
		"--color-secondary-900": "20 50 61", // #14323d
		// tertiary | #198678 
		"--color-tertiary-50": "221 237 235", // #ddedeb
		"--color-tertiary-100": "209 231 228", // #d1e7e4
		"--color-tertiary-200": "198 225 221", // #c6e1dd
		"--color-tertiary-300": "163 207 201", // #a3cfc9
		"--color-tertiary-400": "94 170 161", // #5eaaa1
		"--color-tertiary-500": "25 134 120", // #198678
		"--color-tertiary-600": "23 121 108", // #17796c
		"--color-tertiary-700": "19 101 90", // #13655a
		"--color-tertiary-800": "15 80 72", // #0f5048
		"--color-tertiary-900": "12 66 59", // #0c423b
		// success | #6807ca 
		"--color-success-50": "232 218 247", // #e8daf7
		"--color-success-100": "225 205 244", // #e1cdf4
		"--color-success-200": "217 193 242", // #d9c1f2
		"--color-success-300": "195 156 234", // #c39cea
		"--color-success-400": "149 81 218", // #9551da
		"--color-success-500": "104 7 202", // #6807ca
		"--color-success-600": "94 6 182", // #5e06b6
		"--color-success-700": "78 5 152", // #4e0598
		"--color-success-800": "62 4 121", // #3e0479
		"--color-success-900": "51 3 99", // #330363
		// warning | #f20998 
		"--color-warning-50": "253 218 240", // #fddaf0
		"--color-warning-100": "252 206 234", // #fcceea
		"--color-warning-200": "252 194 229", // #fcc2e5
		"--color-warning-300": "250 157 214", // #fa9dd6
		"--color-warning-400": "246 83 183", // #f653b7
		"--color-warning-500": "242 9 152", // #f20998
		"--color-warning-600": "218 8 137", // #da0889
		"--color-warning-700": "182 7 114", // #b60772
		"--color-warning-800": "145 5 91", // #91055b
		"--color-warning-900": "119 4 74", // #77044a
		// error | #8d5b35 
		"--color-error-50": "238 230 225", // #eee6e1
		"--color-error-100": "232 222 215", // #e8ded7
		"--color-error-200": "227 214 205", // #e3d6cd
		"--color-error-300": "209 189 174", // #d1bdae
		"--color-error-400": "175 140 114", // #af8c72
		"--color-error-500": "141 91 53", // #8d5b35
		"--color-error-600": "127 82 48", // #7f5230
		"--color-error-700": "106 68 40", // #6a4428
		"--color-error-800": "85 55 32", // #553720
		"--color-error-900": "69 45 26", // #452d1a
		// surface | #2e2934 
		"--color-surface-50": "224 223 225", // #e0dfe1
		"--color-surface-100": "213 212 214", // #d5d4d6
		"--color-surface-200": "203 202 204", // #cbcacc
		"--color-surface-300": "171 169 174", // #aba9ae
		"--color-surface-400": "109 105 113", // #6d6971
		"--color-surface-500": "46 41 52", // #2e2934
		"--color-surface-600": "41 37 47", // #29252f
		"--color-surface-700": "35 31 39", // #231f27
		"--color-surface-800": "28 25 31", // #1c191f
		"--color-surface-900": "23 20 25", // #171419	
	}
}