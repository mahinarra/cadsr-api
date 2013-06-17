//>>built
define(
({
// local representation of all CSS3 named colors, companion to dojo.colors.  To be used where descriptive information
// is required for each color, such as a palette widget, and not for specifying color programatically.
//Note: due to the SVG 1.0 spec additions, some of these are alternate spellings for the same color e.g. gray vs. gray.
//TODO: should we be using unique rgb values as keys instead and avoid these duplicates, or rely on the caller to do the reverse mapping?
aliceblue: "アリスブルー",
antiquewhite: "アンティークホワイト",
aqua: "アクア",
aquamarine: "碧緑",
azure: "薄い空色",
beige: "ベージュ",
bisque: "ビスク",
black: "黒",
blanchedalmond: "皮なしアーモンド",
blue: "青",
blueviolet: "青紫",
brown: "茶",
burlywood: "バーリーウッド",
cadetblue: "くすんだ青",
chartreuse: "淡黄緑",
chocolate: "チョコレート",
coral: "珊瑚",
cornflowerblue: "コーンフラワーブルー",
cornsilk: "コーンシルク",
crimson: "深紅",
cyan: "シアンブルー",
darkblue: "ダークブルー",
darkcyan: "ダークシアンブルー",
darkgoldenrod: "ダークゴールデンロッド",
darkgray: "ダークグレイ",
darkgreen: "ダークグリーン",
darkgrey: "ダークグレイ", // same as darkgray
darkkhaki: "ダークカーキ",
darkmagenta: "ダークマジェンタ",
darkolivegreen: "ダークオリーブグリーン",
darkorange: "ダークオレンジ",
darkorchid: "ダークオーキッド",
darkred: "ダークレッド",
darksalmon: "ダークサーモン",
darkseagreen: "ダークシーグリーン",
darkslateblue: "ダークスレートブルー",
darkslategray: "ダークスレートグレイ",
darkslategrey: "ダークスレートグレイ", // same as darkslategray
darkturquoise: "ダークターコイズ",
darkviolet: "ダークバイオレット",
deeppink: "濃いピンク",
deepskyblue: "濃い空色",
dimgray: "くすんだグレイ",
dimgrey: "くすんだグレイ", // same as dimgray
dodgerblue: "ドッジャーブルー",
firebrick: "赤煉瓦色",
floralwhite: "フローラルホワイト",
forestgreen: "フォレストグリーン",
fuchsia: "紫紅色",
gainsboro: "ゲインズボーロ",
ghostwhite: "ゴーストホワイト",
gold: "金",
goldenrod: "ゴールデンロッド",
gray: "グレイ",
green: "緑",
greenyellow: "緑黄色",
grey: "グレイ", // same as gray
honeydew: "ハニーデュー",
hotpink: "ホットピンク",
indianred: "インディアンレッド",
indigo: "藍色",
ivory: "アイボリー",
khaki: "カーキ",
lavender: "ラベンダー",
lavenderblush: "ラベンダーブラッシ",
lawngreen: "ローングリーン",
lemonchiffon: "レモンシフォン",
lightblue: "ライトブルー",
lightcoral: "ライトコーラル",
lightcyan: "ライトシアン",
lightgoldenrodyellow: "ライトゴールデンロッドイエロー",
lightgray: "ライトグレイ",
lightgreen: "ライトグリーン",
lightgrey: "ライトグレイ", // same as lightgray
lightpink: "ライトピンク",
lightsalmon: "ライトサーモン",
lightseagreen: "ライトシーグリーン",
lightskyblue: "ライトスカイブルー",
lightslategray: "ライトスレートグレイ",
lightslategrey: "ライトスレートグレイ", // same as lightslategray
lightsteelblue: "ライトスチールブルー",
lightyellow: "ライトイエロー",
lime: "ライム",
limegreen: "ライムグリーン",
linen: "亜麻色",
magenta: "赤紫",
maroon: "えび茶",
mediumaquamarine: "ミディアムアクアマリーン",
mediumblue: "ミディアムブルー",
mediumorchid: "ミディアムオーキッド",
mediumpurple: "ミディアムパープル",
mediumseagreen: "ミディアムシーグリーン",
mediumslateblue: "ミディアムスレートブルー",
mediumspringgreen: "ミディアムスプリンググリーン",
mediumturquoise: "ミディアムターコイズ",
mediumvioletred: "ミディアムバイオレットレッド",
midnightblue: "ミッドナイトブルー",
mintcream: "ミントクリーム",
mistyrose: "ミスティローズ",
moccasin: "モカシン",
navajowhite: "ナバホホワイト",
navy: "濃紺",
oldlace: "オールドレイス",
olive: "オリーブ",
olivedrab: "濃黄緑",
orange: "オレンジ",
orangered: "オレンジレッド",
orchid: "薄紫",
palegoldenrod: "ペイルゴールデンロッド",
palegreen: "ペイルグリーン",
paleturquoise: "ペイルターコイズ",
palevioletred: "ペイルバイオレットレッド",
papayawhip: "パパイアホイップ",
peachpuff: "ピーチパフ",
peru: "ペルー",
pink: "ピンク",
plum: "深紫",
powderblue: "淡青",
purple: "紫",
red: "赤",
rosybrown: "ロージーブラウン",
royalblue: "藤色",
saddlebrown: "サドルブラウン",
salmon: "サーモン",
sandybrown: "砂褐色",
seagreen: "シーグリーン",
seashell: "シーシェル",
sienna: "黄褐色",
silver: "銀",
skyblue: "スカイブルー",
slateblue: "スレートブルー",
slategray: "スレートグレイ",
slategrey: "スレートグレイ", // same as slategray
snow: "雪色",
springgreen: "スプリンググリーン",
steelblue: "鋼色",
tan: "茶褐色",
teal: "ティール",
thistle: "シスル",
tomato: "トマト色",
transparent: "透明",
turquoise: "ターコイズ",
violet: "すみれ色",
wheat: "小麦色",
white: "白",
whitesmoke: "ホワイトスモーク",
yellow: "黄",
yellowgreen: "黄緑"
})
);
