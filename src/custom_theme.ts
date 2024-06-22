// You can also use the generator at https://skeleton.dev/docs/generator to create these values for you
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';
export const custom_theme: CustomThemeConfig = {
	name: 'custom_theme',
	properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #7d51e7 
		"--color-primary-50": "236 229 251", // #ece5fb
		"--color-primary-100": "229 220 250", // #e5dcfa
		"--color-primary-200": "223 212 249", // #dfd4f9
		"--color-primary-300": "203 185 245", // #cbb9f5
		"--color-primary-400": "164 133 238", // #a485ee
		"--color-primary-500": "125 81 231", // #7d51e7
		"--color-primary-600": "113 73 208", // #7149d0
		"--color-primary-700": "94 61 173", // #5e3dad
		"--color-primary-800": "75 49 139", // #4b318b
		"--color-primary-900": "61 40 113", // #3d2871
		// secondary | #b569aa 
		"--color-secondary-50": "244 233 242", // #f4e9f2
		"--color-secondary-100": "240 225 238", // #f0e1ee
		"--color-secondary-200": "237 218 234", // #eddaea
		"--color-secondary-300": "225 195 221", // #e1c3dd
		"--color-secondary-400": "203 150 196", // #cb96c4
		"--color-secondary-500": "181 105 170", // #b569aa
		"--color-secondary-600": "163 95 153", // #a35f99
		"--color-secondary-700": "136 79 128", // #884f80
		"--color-secondary-800": "109 63 102", // #6d3f66
		"--color-secondary-900": "89 51 83", // #593353
		// tertiary | #97c008 
		"--color-tertiary-50": "239 246 218", // #eff6da
		"--color-tertiary-100": "234 242 206", // #eaf2ce
		"--color-tertiary-200": "229 239 193", // #e5efc1
		"--color-tertiary-300": "213 230 156", // #d5e69c
		"--color-tertiary-400": "182 211 82", // #b6d352
		"--color-tertiary-500": "151 192 8", // #97c008
		"--color-tertiary-600": "136 173 7", // #88ad07
		"--color-tertiary-700": "113 144 6", // #719006
		"--color-tertiary-800": "91 115 5", // #5b7305
		"--color-tertiary-900": "74 94 4", // #4a5e04
		// success | #42a372 
		"--color-success-50": "227 241 234", // #e3f1ea
		"--color-success-100": "217 237 227", // #d9ede3
		"--color-success-200": "208 232 220", // #d0e8dc
		"--color-success-300": "179 218 199", // #b3dac7
		"--color-success-400": "123 191 156", // #7bbf9c
		"--color-success-500": "66 163 114", // #42a372
		"--color-success-600": "59 147 103", // #3b9367
		"--color-success-700": "50 122 86", // #327a56
		"--color-success-800": "40 98 68", // #286244
		"--color-success-900": "32 80 56", // #205038
		// warning | #b5e466 
		"--color-warning-50": "244 251 232", // #f4fbe8
		"--color-warning-100": "240 250 224", // #f0fae0
		"--color-warning-200": "237 248 217", // #edf8d9
		"--color-warning-300": "225 244 194", // #e1f4c2
		"--color-warning-400": "203 236 148", // #cbec94
		"--color-warning-500": "181 228 102", // #b5e466
		"--color-warning-600": "163 205 92", // #a3cd5c
		"--color-warning-700": "136 171 77", // #88ab4d
		"--color-warning-800": "109 137 61", // #6d893d
		"--color-warning-900": "89 112 50", // #597032
		// error | #a42276 
		"--color-error-50": "241 222 234", // #f1deea
		"--color-error-100": "237 211 228", // #edd3e4
		"--color-error-200": "232 200 221", // #e8c8dd
		"--color-error-300": "219 167 200", // #dba7c8
		"--color-error-400": "191 100 159", // #bf649f
		"--color-error-500": "164 34 118", // #a42276
		"--color-error-600": "148 31 106", // #941f6a
		"--color-error-700": "123 26 89", // #7b1a59
		"--color-error-800": "98 20 71", // #621447
		"--color-error-900": "80 17 58", // #50113a
		// surface | #0e2212 
		"--color-surface-50": "219 222 219", // #dbdedb
		"--color-surface-100": "207 211 208", // #cfd3d0
		"--color-surface-200": "195 200 196", // #c3c8c4
		"--color-surface-300": "159 167 160", // #9fa7a0
		"--color-surface-400": "86 100 89", // #566459
		"--color-surface-500": "14 34 18", // #0e2212
		"--color-surface-600": "13 31 16", // #0d1f10
		"--color-surface-700": "11 26 14", // #0b1a0e
		"--color-surface-800": "8 20 11", // #08140b
		"--color-surface-900": "7 17 9", // #071109
		
	}
}