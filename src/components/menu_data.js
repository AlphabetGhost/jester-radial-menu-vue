/**
 * Entry类
 * 字段：
 * - name           菜单的名称；字符串或数组，数组每个元素一行
 * - a              菜单的翻译；字符串或数组，数组每个元素一行
 * - category       菜单的类别
 * - parent         菜单的父节点pid（暂未使用）
 * - children       菜单的子节点；数组，数组中是一个Entry类
 * - binary         二选一；根据条件变化的菜单，需要指定条件变量
 * - alt            二选一对立条件下的菜单名；同name
 * - b              二选一对立条件下的菜单翻译；同b
 */

class Entry {
    constructor(name, category, parent, children) {
        console.log(name, category, parent, children)
    }
}

export default {
    states: {
        test: new Entry(),

        conditions: {

        },

        mode: '',
        a2g: {
            weaponActive: '',
            aimMode: '',
            pair: '',
            fuze: '',
            quantity: '',
            timer: '',
            distance: '',
        },
        a2a: {

        },
    },

    static: {
        mainMenu: '主菜单',
        press: '按下',

        category: {
            "RADAR": "雷达",
            "RADIO": "无线电",
            "UTILITY": "通用",
            "DEFENSIVE": "防御",
            "NAVIGATION": "导航",
            "WEAPONS": "武器",
            "": ""  // empty category for iceman radial menu
        }
    },

    jester: [
        {
            name: 'AN/ARC-182',
            a: '',
            category: 'RADIO',
            parent: '',
            children: [
                {
                    name: 'USE GUARD 243.000',
                    a: '使用救生频率 243.000',
                    category: 'RADIO',
                    parent: '',
                    children: [],
                },
                {
                    name: 'USE MANUAL 124.000',
                    a: '使用手动频率 124.000',
                    category: 'RADIO',
                    parent: '',
                    children: [],
                },
                {
                    name: ['USE CHANNEL', 'CH1', '124.000'],
                    a: ['使用预设波道', '波道1', '124.000'],
                    category: 'RADIO',
                    parent: '',
                    children: [],
                },
                {
                    name: 'TUNE MANUAL',
                    a: '手动调谐频率',
                    category: 'RADIO',
                    parent: '',
                    children: [],
                },
                {
                    name: 'SELECT CHANNEL',
                    a: '选择预设波道',
                    category: 'RADIO',
                    parent: '',
                    children: [
                        {
                            name: ['PREV', 'CHHANNEL'],
                            a: '上一波道',
                            category: 'RADIO',
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['NEXT', 'CHHANNEL'],
                            a: '下一波道',
                            category: 'RADIO',
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['CHANNELS', '1-5'],
                            a: '波道1-5',
                            category: 'RADIO',
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['CHANNELS', '6-10'],
                            a: '波道6-10',
                            category: 'RADIO',
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['CHANNELS', '11-15'],
                            a: '波道11-15',
                            category: 'RADIO',
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['CHANNELS', '16-20'],
                            a: '波道16-20',
                            category: 'RADIO',
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['CHANNELS', '21-25'],
                            a: '波道21-25',
                            category: 'RADIO',
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['CHANNELS', '36-30'],
                            a: '波道36-30',
                            category: 'RADIO',
                            parent: '',
                            children: [],
                        },
                    ],
                },
                {
                    name: 'SELECT MODE',
                    a: '选择模式',
                    category: 'RADIO',
                    parent: '',
                    children: [
                        {
                            name: ['MODE', 'OFF'],
                            a: ['模式', 'OFF'],
                            category: 'RADIO',
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['MODE', 'TR'],
                            a: ['模式', '收发'],
                            category: 'RADIO',
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['MODE', 'TG/G'],
                            a: ['模式', '收发/救生'],
                            category: 'RADIO',
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['MODE', 'DF'],
                            a: ['模式', '测向'],
                            category: 'RADIO',
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['MODE', 'TEST'],
                            a: ['模式', '检测'],
                            category: 'RADIO',
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['MODULATION', 'MAN FM'],
                            a: ['调制', '调频'],
                            category: 'RADIO',
                            parent: '',
                            children: [],
                        },
                    ],
                },
                {
                    name: 'TUNE ATC',
                    a: '调谐至空管',
                    category: 'RADIO',
                    parent: '',
                    children: [],
                },
                {
                    name: 'TUNE TAC',
                    a: '调谐至战斗频率',
                    category: 'RADIO',
                    parent: '',
                    children: [
                        {
                            name: ['ARCO 1-1', 'KC-135MPRS'],
                            category: 'RADIO',
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['OVERLORD 1-1', 'E-2D'],
                            category: 'RADIO',
                            parent: '',
                            children: [],
                        },
                    ],
                },
            ],
        },
        {
            name: ['BEYOND VISUAL', 'RANGE'],
            a: '超视距',
            category: 'RADAR',
            parent: '',
            children: [
                {
                    name: 'STT LOCK',
                    a: '单目标跟踪锁定',
                    category: 'RADAR',
                    parent: '',
                    children: [
                        {
                            name: 'TARGET AHEAD',
                            a: '前方的目标',
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'ENEMY TARGET AHEAD',
                            a: '前方的敌机',
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'FRIENDLY TARGET AHEAD',
                            a: '前方的友机',
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'CHOOSE SPECIFIC TARGET',
                            a: '选择特定目标',
                            category: 'RADAR',
                            parent: '',
                            children: [
                                {
                                    name: ['REL.AZ: -18 DEG', 'DISTANCE: 30 NM'],
                                    a: ['相对方位：-18 度', '距离：30 海里'],
                                    category: 'RADAR',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: ['REL.AZ: 16 DEG', 'DISTANCE: 32 NM'],
                                    a: ['相对方位：16 度', '距离：32 海里'],
                                    category: 'RADIO',
                                    parent: '',
                                    children: [],
                                },
                            ],
                        },
                        {
                            name: 'FIRST TWS TARGET',
                            a: '第一个 TWS 目标',
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'TWS TARGET NUMBER',
                            a: 'TWS 目标序号',
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                    ],
                },
                {
                    name: 'SCAN ELEVATION',
                    a: '扫描仰角',
                    category: 'RADAR',
                    parent: '',
                    children: [
                        {
                            name: 'SCAN UP OR DOWN',
                            a: '向上或下方扫描',
                            category: 'RADAR',
                            parent: '',
                            children: [
                                {
                                    name: 'AUTO EL AND AZ',
                                    a: '自动仰角和方位角',
                                    category: 'RADAR',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: 'LOW',
                                    a: '低',
                                    category: 'RADAR',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: ['LOW', 'MIDDLE'],
                                    a: '中低',
                                    category: 'RADAR',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: 'MIDDLE',
                                    a: '中',
                                    category: 'RADAR',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: ['HIGH', 'MIDDILE'],
                                    a: '中高',
                                    category: 'RADAR',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: 'HIGH',
                                    a: '高',
                                    category: 'RADAR',
                                    parent: '',
                                    children: [],
                                },
                            ],
                        },
                        {
                            name: 'SCAN ALTITUDE AT DISTANCE',
                            a: '指定距离上扫描的高度',
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                    ],
                },
                {
                    name: 'SCAN AZIMUTH',
                    a: '扫描方位角',
                    category: 'RADAR',
                    parent: '',
                    children: [
                        {
                            name: ['AUTO', 'ELEVATION AND AZIMUTH'],
                            a: ['自动', '仰角和方位角'],
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'LEFT',
                            a: '左',
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['LEFT', 'CENTER'],
                            a: ['左', '中'],
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'CENTER',
                            a: '中间',
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['RIGHT', 'CENTER'],
                            a: ['右', '中'],
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'RIGHT',
                            a: '右',
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                    ],
                },
                {
                    name: 'TID RANGE',
                    a: 'TID 显示距离',
                    category: 'RADAR',
                    parent: '',
                    children: [
                        {
                            name: 'AUTO',
                            a: '自动',
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                        {
                            name: '25 NM',
                            a: '25 海里',
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                        {
                            name: '50 NM',
                            a: '50 海里',
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                        {
                            name: '100 NM',
                            a: '100 海里',
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                        {
                            name: '200 NM',
                            a: '200 海里',
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                        {
                            name: '400 NM',
                            a: '400 海里',
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                    ],
                },
                {
                    name: 'RADAR SETTING',
                    a: '雷达设置',
                    category: 'RADAR',
                    parent: '',
                    children: [
                        {
                            name: 'AUTO',
                            a: '自动',
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['TRACK WHILE SCAN', 'AUTO'],
                            a: ['边扫描边跟踪', '自动'],
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['TRACK WHILE SCAN', 'MANUAL'],
                            a: ['边扫描边跟踪', '手动'],
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'RANGE WHILE SEARCH',
                            a: '边搜索边测距',
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'TARGET SIZE SWITCH',
                            a: '目标大小开关',
                            category: 'RADAR',
                            parent: '',
                            children: [
                                {
                                    name: 'NORMAL',
                                    a: '正常大小',
                                    category: 'RADAR',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: 'LARGE',
                                    a: '大',
                                    category: 'RADAR',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: 'SMALL',
                                    a: '小',
                                    category: 'RADAR',
                                    parent: '',
                                    children: [],
                                },
                            ]
                        },
                        {
                            name: 'TARGET ASPECT SWITCH',
                            a: '目标态势开关',
                            category: 'RADAR',
                            parent: '',
                            children: [
                                {
                                    name: 'BEAM',
                                    a: '侧对',
                                    category: 'RADAR',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: 'NOSE',
                                    a: '迎头',
                                    category: 'RADAR',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: 'TAIL',
                                    a: '尾追',
                                    category: 'RADAR',
                                    parent: '',
                                    children: [],
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'TID GROUND STABILIZE',
                    a: 'TID 相对地面稳定',
                    category: 'RADAR',
                    parent: '',
                    children: [
                        {
                            name: '15 S',
                            a: '15 秒',
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                        {
                            name: '30 S',
                            a: '30 秒',
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                        {
                            name: '60 S',
                            a: '60 秒',
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                        {
                            name: '120 S',
                            a: '120 秒',
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'INDEFINITE',
                            a: '无限',
                            category: 'RADAR',
                            parent: '',
                            children: [],
                        },
                    ],
                },
                {
                    name: 'GO SILENT',
                    a: '雷达静默',
                    category: 'RADAR',
                    parent: '',
                    children: [],
                },
            ],
        },
        {
            name: ['WITHIN VISUAL', 'RANGE'],
            a: '视距内',
            category: 'RADAR',
            parent: '',
            children: [
                {
                    name: 'JETTISON DROP TANKS',
                    a: '抛弃副油箱',
                    category: 'UTILITY',
                    parent: '',
                    children: [],
                },
            ],
        },
        {
            name: 'AIR TO GROUND',
            a: '空对地',
            category: 'WEAPONS',
            parent: '',
            children: [
                {
                    name: 'SELECT ORDNANCE',
                    a: '选择挂载',
                    category: 'WEAPONS',
                    parent: '',
                    children: [],
                },
                {
                    name: 'SET COMPUTER TARGET',
                    alt: '',
                    a: '设定计算机目标',
                    category: 'WEAPONS',
                    parent: '',
                    children: [],
                },
                {
                    name: 'SET PAIRS',
                    a: '设定成对投放',
                    category: 'WEAPONS',
                    parent: '',
                    children: [],
                },
                {
                    name: 'SET MECHANICAL FUZE',
                    a: '设定机械引信',
                    category: 'WEAPONS',
                    parent: '',
                    children: [
                        {
                            name: ['NOSE', 'TAIL'],
                            a: ['头部', '尾部'],
                            category: 'WEAPONS',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'NOSE',
                            a: '头部',
                            category: 'WEAPONS',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'SAFE',
                            a: '安全',
                            category: 'WEAPONS',
                            parent: '',
                            children: [],
                        },
                    ],
                },
                {
                    name: 'RIPPLE SETTINGS',
                    a: '连发设定',
                    category: 'WEAPONS',
                    parent: '',
                    children: [
                        {
                            name: 'SET RIPPLE QUANTITY',
                            a: '设定连发数量',
                            category: 'WEAPONS',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'SET RIPPLE TIMER',
                            a: '设定连发时间间隔',
                            category: 'WEAPONS',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'SET RIPPLE DISTANCE',
                            a: '设定连发命中点间距',
                            category: 'WEAPONS',
                            parent: '',
                            children: [],
                        },
                    ],
                },
                {
                    name: 'JETTISON SELECTED',
                    a: '抛弃选定的挂载',
                    category: 'WEAPONS',
                    parent: '',
                    children: [],
                },
                {
                    name: 'SELECT STATIONS',
                    a: '选择挂点',
                    category: 'WEAPONS',
                    parent: '',
                    children: [],
                },
            ],
            remark: 'a2g | aimMode, pair, fuze, quantity, weaponActive'
        },
        {
            name: 'NAVIGATION',
            a: '导航',
            category: 'UTILITY',
            parent: '',
            children: [
                {
                    name: ['SELECT DESTINATION', 'STEER POINT'],
                    a: ['选择目标', '转向点'],
                    category: 'UTILITY',
                    parent: '',
                    children: [
                        {
                            name: 'WPT 1',
                            a: '航路点 1',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'WPT 2',
                            a: '航路点 2',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'WPT 3',
                            a: '航路点 3',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'FIXED POINT',
                            a: '固定点',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'INITIAL POINT',
                            a: '起始点',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'SURFACE TARGET',
                            a: '地面/水面目标点',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'HOME BASE',
                            a: '基地',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'MAN',
                            a: '手动',
                            parent: '',
                            children: [],
                        },
                    ],
                },
                {
                    name: ['RESTORE MISSION', 'STEER POINT'],
                    a: ['恢复任务', '转向点'],
                    category: 'UTILITY',
                    parent: '',
                    children: [
                        {
                            name: 'WPT 1',
                            a: '航路点 1',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'WPT 2',
                            a: '航路点 2',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'WPT 3',
                            a: '航路点 3',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'FIXED POINT',
                            a: '固定点',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'INITIAL POINT',
                            a: '起始点',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'SURFACE TARGET',
                            a: '地面/水面目标点',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'HOME BASE',
                            a: '基地',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'MORE STEERPOINTS',
                            a: '更多转向点',
                            category: 'UTILITY',
                            parent: '',
                            children: [
                                {
                                    name: 'DEFENSE POINT',
                                    a: '防御点',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: 'HOSTILE AREA',
                                    a: '敌区',
                                    parent: '',
                                    children: [],
                                },
                            ],
                        },
                    ],
                },
                {
                    name: ['MANUAL ENTER', 'STEER POINT'],
                    a: ['手动输入', '转向点'],
                    category: 'UTILITY',
                    parent: '',
                    children: [
                        {
                            name: 'WPT 1',
                            a: '航路点 1',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'WPT 2',
                            a: '航路点 2',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'WPT 3',
                            a: '航路点 3',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'FIXED POINT',
                            a: '固定点',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'INITIAL POINT',
                            a: '起始点',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'SURFACE TARGET',
                            a: '地面/水面目标点',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'HOME BASE',
                            a: '基地',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'MORE STEERPOINTS',
                            a: '更多转向点',
                            category: 'UTILITY',
                            parent: '',
                            children: [
                                {
                                    name: 'DEFENSE POINT',
                                    a: '防御点',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: 'HOSTILE AREA',
                                    a: '敌区',
                                    parent: '',
                                    children: [],
                                },
                            ],
                        },
                    ],
                },
                {
                    name: ['STEER POINT', 'FROM MAP'],
                    a: ['从地图读取', '转向点'],
                    category: 'UTILITY',
                    parent: '',
                    children: [
                        {
                            name: 'WPT 1',
                            a: '航路点 1',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'WPT 2',
                            a: '航路点 2',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'WPT 3',
                            a: '航路点 3',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'FIXED POINT',
                            a: '固定点',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'INITIAL POINT',
                            a: '起始点',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'SURFACE TARGET',
                            a: '地面/水面目标点',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'HOME BASE',
                            a: '基地',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'MORE STEERPOINTS',
                            a: '更多转向点',
                            category: 'UTILITY',
                            parent: '',
                            children: [
                                {
                                    name: 'DEFENSE POINT',
                                    a: '防御点',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: 'HOSTILE AREA',
                                    a: '敌区',
                                    parent: '',
                                    children: [],
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'TACAN',
                    a: '塔康',
                    category: 'RADIO',
                    parent: '',
                    children: [
                        {
                            name: 'SELECT MODE',
                            a: '选择模式',
                            category: 'RADIO',
                            parent: '',
                            children: [
                                {
                                    name: ['MODE', 'OFF'],
                                    a: ['模式', '关闭'],
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: ['MODE', 'REC'],
                                    a: ['模式', '接收'],
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: ['MODE', 'T/R'],
                                    a: ['模式', '收发'],
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: ['MODE', 'A/A'],
                                    a: ['模式', '空空'],
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: ['MODE', 'BCN'],
                                    a: ['模式', '信标'],
                                    parent: '',
                                    children: [],
                                },
                            ],
                        },
                        {
                            name: 'SELECT CHANNEL',
                            a: '选择波道',
                            category: 'RADIO',
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['TUNE', 'GROUND', 'STATION'],
                            a: ['调谐至', '地面台'],
                            category: 'RADIO',
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['TUNE', 'TAC'],
                            a: ['调谐至', '战斗波道'],
                            category: 'RADIO',
                            parent: '',
                            children: [],
                        },
                    ],
                },
                {
                    name: 'NAVIGATION GRID',
                    a: '导航网格',
                    category: 'UTILITY',
                    parent: '',
                    children: [
                        {
                            name: 'ENABLE NAVGRID',
                            a: '启用导航网格',
                            category: 'UTILITY',
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['MANUAL ENTER', 'NAVGRID REF'],
                            a: ['手动输入', '导航网格参考点'],
                            category: 'UTILITY',
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['NAVGRID REF', 'FROM MAP'],
                            a: ['从地图读取', '导航网格参考点'],
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'GRID HEADING RELATIVE',
                            a: '网格相对航向',
                            category: 'UTILITY',
                            parent: '',
                            children: [
                                {
                                    name: '+180 DEGREES',
                                    a: '+180 度',
                                    category: 'UTILITY',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: '+30 DEGREES',
                                    a: '+30 度',
                                    category: 'UTILITY',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: '+90 DEGREES',
                                    a: '+90 度',
                                    category: 'UTILITY',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: '+120 DEGREES',
                                    a: '+120 度',
                                    category: 'UTILITY',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: '+180 DEGREES',
                                    a: '+180 度',
                                    category: 'UTILITY',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: '-120 DEGREES',
                                    a: '-120 度',
                                    category: 'UTILITY',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: '-90 DEGREES',
                                    a: '-90 度',
                                    category: 'UTILITY',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: '-30 DEGREES',
                                    a: '-30 度',
                                    category: 'UTILITY',
                                    parent: '',
                                    children: [],
                                },
                            ],
                        },
                        {
                            name: 'GRID HEADING ABSOLUTE',
                            a: '网格绝对航向',
                            category: 'UTILITY',
                            parent: '',
                            children: [
                                {
                                    name: '0 DEGREES',
                                    a: '0 度',
                                    category: 'UTILITY',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: '45 DEGREES',
                                    a: '45 度',
                                    category: 'UTILITY',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: '90 DEGREES',
                                    a: '90 度',
                                    category: 'UTILITY',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: '135 DEGREES',
                                    a: '135 度',
                                    category: 'UTILITY',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: '180 DEGREES',
                                    a: '180 度',
                                    category: 'UTILITY',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: '225 DEGREES',
                                    a: '225 度',
                                    category: 'UTILITY',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: '270 DEGREES',
                                    a: '270 度',
                                    category: 'UTILITY',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: '315 DEGREES',
                                    a: '315 度',
                                    category: 'UTILITY',
                                    parent: '',
                                    children: [],
                                },
                            ],
                        },
                        {
                            name: 'GRID COVERAGE',
                            a: '网格覆盖范围',
                            category: 'UTILITY',
                            parent: '',
                            children: [
                                {
                                    name: '30 DEGREES',
                                    a: '30 度',
                                    category: 'UTILITY',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: '60 DEGREES',
                                    a: '60 度',
                                    category: 'UTILITY',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: '90 DEGREES',
                                    a: '90 度',
                                    category: 'UTILITY',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: '120 DEGREES',
                                    a: '120 度',
                                    category: 'UTILITY',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: '180 DEGREES',
                                    a: '180 度',
                                    category: 'UTILITY',
                                    parent: '',
                                    children: [],
                                },
                            ],
                        },
                        {
                            name: 'GRID SECTORS',
                            a: '网格扇区',
                            category: 'UTILITY',
                            parent: '',
                            children: [
                                {
                                    name: '1 SECTORS',
                                    a: '1 扇区',
                                    category: 'UTILITY',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: '2 SECTORS',
                                    a: '2 扇区',
                                    category: 'UTILITY',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: '3 SECTORS',
                                    a: '3 扇区',
                                    category: 'UTILITY',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: '4 SECTORS',
                                    a: '4 扇区',
                                    category: 'UTILITY',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: '5 SECTORS',
                                    a: '5 扇区',
                                    category: 'UTILITY',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: '6 SECTORS',
                                    a: '6 扇区',
                                    category: 'UTILITY',
                                    parent: '',
                                    children: [],
                                },
                            ],
                        },
                        {
                            name: 'CENTER AIRCRAFT',
                            a: '飞机置中',
                            category: 'UTILITY',
                            parent: '',
                            children: [],
                        },
                    ],
                },
            ],
        },
        {
            name: 'CMS & RWR',
            a: '电子对抗 & 雷达警告',
            category: 'DEFENSIVE',
            parent: '',
            children: [
                {
                    name: ['CMS MODE', '(FENCED IN)'],
                    a: ['对抗措施 模式', '(进入战区)'],
                    category: 'DEFENSIVE',
                    parent: '',
                    children: [
                        {
                            name: ['AUTO (C)', 'MAN (F)'],
                            a: ['自动（箔条）', '手动（红外干扰弹）'],
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['MAN (C,F)', '(DEFAULT)'],
                            a: ['手动（箔条，红外干扰弹）', '（默认）'],
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'OFF',
                            a: '关闭',
                            parent: '',
                            children: [],
                        },
                    ],
                },
                {
                    name: 'FLARE MODE',
                    a: '红外干扰弹模式',
                    category: 'DEFENSIVE',
                    parent: '',
                    children: [
                        {
                            name: ['FLARE', 'PILOT'],
                            a: ['红外干扰弹', '飞行员控制'],
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['FLARE', 'NORMAL'],
                            a: ['红外干扰弹', '正常'],
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['FLARE', 'MULTI'],
                            a: ['红外干扰弹', '齐射'],
                            parent: '',
                            children: [],
                        },
                    ],
                },
                {
                    name: ['SET CHAFF', 'PROGRAM'],
                    a: ['设定箔条', '程序'],
                    category: 'DEFENSIVE',
                    parent: '',
                    children: [
                        {
                            name: ['B:RAND * RAND', 'S:1 * 2 SEC'],
                            a: ['连投：随机 * 随机', '齐射轮数：1 * 2 秒间隔'],
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['B:RAND * RAND', 'S:4 * 6 SEC'],
                            a: ['连投：随机 * 随机', '齐射轮数：4 * 6 秒间隔'],
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['B:RAND * RAND', 'S:8 * 6 SEC'],
                            a: ['连投：随机 * 随机', '齐射轮数：8 * 6 秒间隔'],
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['B:2 * 0.12 SEC', 'S:4 * 4 SEC'],
                            a: ['连投：2 * 0.12 秒间隔', '齐射轮数：8 * 4 秒间隔'],
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['B:2 * 0.12 SEC', 'S:8 * 4 SEC'],
                            a: ['连投：2 * 0.12 秒间隔', '齐射轮数：8 * 4 秒间隔'],
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['B:4 * 0.12 SEC', 'S:4 * 4 SEC'],
                            a: ['连投：4 * 0.12 秒间隔', '齐射轮数：4 * 4 秒间隔'],
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['B:4 * 0.12 SEC', 'S:8 * 4 SEC'],
                            a: ['连投：4 * 0.12 秒间隔', '齐射轮数：8 * 4 秒间隔'],
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['B:RAND * 1 SEC', 'S:8 * 2 SEC'],
                            a: ['连投：随机 * 1 秒间隔', '齐射轮数：8 * 2 秒间隔'],
                            parent: '',
                            children: [],
                        },
                    ],
                },
                {
                    name: ['SET FLARE', 'PROGRAM'],
                    a: ['设定红外干扰弹', '程序'],
                    category: 'DEFENSIVE',
                    parent: '',
                    children: [
                        {
                            name: 'S:2 * 2 SEC',
                            a: '齐射轮数：2 * 2 秒间隔',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'S:4 * 2 SEC',
                            a: '齐射轮数：4 * 2 秒间隔',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'S10 * 2 SEC',
                            a: '齐射轮数：10 * 2 秒间隔',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'S:4 * 6 SEC',
                            a: '齐射轮数：4 * 6 秒间隔',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'S:8 * 6 SEC',
                            a: '齐射轮数：8 * 6 秒间隔',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'S:10 * 6 SEC',
                            a: '齐射轮数：10 * 6 秒间隔',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'S:6 * 10 SEC',
                            a: '齐射轮数：6 * 10 秒间隔',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'S:10 * 10 SEC',
                            a: '齐射轮数：10 * 10 秒间隔',
                            parent: '',
                            children: [],
                        },
                    ],
                },
                {
                    name: ['CMS CONTROL', 'ORDER'],
                    a: ['对抗措施控制', '命令'],
                    category: 'DEFENSIVE',
                    parent: '',
                    children: [
                        {
                            name: 'CHAFF: PROGRAM',
                            a: '箔条：程序',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'CHAFF: SINGLE',
                            a: '箔条：单发',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'CHAFF: TIGHT',
                            a: '箔条：密集',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'FLARE: PROGRAM',
                            a: '红外干扰弹：程序',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'FLARE: SINGLE',
                            a: '红外干扰弹：单发',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'FLARE: TIGHT',
                            a: '红外干扰弹：密集',
                            parent: '',
                            children: [],
                        },
                    ],
                },
                {
                    name: ['RWR DISPLAY', 'TYPE'],
                    a: ['RWR 显示', '类型'],
                    category: 'DEFENSIVE',
                    parent: '',
                    children: [
                        {
                            name: 'NORMAL',
                            a: '正常',
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['AIRBORNE', 'INTERCEPTOR'],
                            a: ['机载截击雷达'],
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'AAA',
                            a: '高射炮',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'UNKNOWN',
                            a: '不明',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'FRIENDLY',
                            a: '友机',
                            parent: '',
                            children: [],
                        },
                    ],
                },
                {
                    name: ['SET JAMMER', 'XMIT'],
                    a: ['设定干扰机', '发射'],
                    category: 'DEFENSIVE',
                    parent: '',
                    children: [],
                },
            ],
        },
        {
            name: 'DATA LINK',
            a: '数据链路',
            category: 'RADIO',
            parent: '',
            children: [
                {
                    name: 'SET MODE',
                    a: '设定模式',
                    category: 'RADIO',
                    parent: '',
                    children: [
                        {
                            name: 'TACTICAL DATALINK SYSTEM',
                            a: '战术数据链路系统',
                            category: 'RADIO',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'FIGHTER-TO-FIGHTER',
                            a: '战机间',
                            category: 'RADIO',
                            parent: '',
                            children: [],
                        },
                        {
                            name: 'OFF',
                            a: '关闭',
                            category: 'RADIO',
                            parent: '',
                            children: [],
                        },
                    ],
                },
                {
                    name: 'SET FREQUENCY PRESET',
                    a: '设定预设频率',
                    category: 'RADIO',
                    parent: '',
                    children: [
                        {
                            name: ['300.00MHZ', '(AI F2F)'],
                            a: ['300.00MHZ', '(AI 战机间使用)'],
                            category: 'RADIO',
                            parent: '',
                            children: [],
                        },
                        {
                            name: '300.10MHZ',
                            a: '300.10MHZ',
                            category: 'RADIO',
                            parent: '',
                            children: [],
                        },
                        {
                            name: '300.20MHZ',
                            a: '300.20MHZ',
                            category: 'RADIO',
                            parent: '',
                            children: [],
                        },
                        {
                            name: '300.30MHZ',
                            a: '300.30MHZ',
                            category: 'RADIO',
                            parent: '',
                            children: [],
                        },
                        {
                            name: '300.40MHZ',
                            a: '300.40MHZ',
                            category: 'RADIO',
                            parent: '',
                            children: [],
                        },
                        {
                            name: '300.50MHZ',
                            a: '300.50MHZ',
                            category: 'RADIO',
                            parent: '',
                            children: [],
                        },
                        {
                            name: '300.60MHZ',
                            a: '300.60MHZ',
                            category: 'RADIO',
                            parent: '',
                            children: [],
                        },
                        {
                            name: '300.70MHZ',
                            a: '300.70MHZ',
                            category: 'RADIO',
                            parent: '',
                            children: [],
                        },
                    ],
                },
                {
                    name: 'SET HOST',
                    a: '设定主机',
                    category: 'RADIO',
                    parent: '',
                    children: [
                        {
                            name: ['OVERLORD 1-1', 'E-2D', 'ATDS'],
                            a: ['OVERLORD 1-1', 'E-2D', '空中战术数据系统'],
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['OVERLORD 1-1', 'E-3A', 'ATDS'],
                            a: ['OVERLORD 1-1', 'E-3A', '空中战术数据系统'],
                            parent: '',
                            children: [],
                        },
                        {
                            name: ['CVN-73', 'CVN-73"George.Washington"', 'NTDS'],
                            a: ['CVN-73', 'CVN-73"乔治.华盛顿"', '海军战术数据系统'],
                            parent: '',
                            children: [],
                        },
                    ],
                },
            ],
        },
        {
            name: 'CREW CONTRACT',
            a: '机组协议',
            category: 'UTILITY',
            parent: '',
            children: [
                {
                    name: 'SET INACTIVE',
                    a: '停用 Jester',
                    category: 'UTILITY',
                    parent: '',
                    children: [],
                },
                {
                    name: 'SET NO TALKING',
                    a: '禁言 Jester',
                    category: 'UTILITY',
                    parent: '',
                    children: [],
                },
                {
                    name: 'SET EJECT BOTH',
                    a: '设定为一起弹射',
                    category: 'UTILITY',
                    parent: '',
                    children: [],
                },
                {
                    name: ['DISABLE LANDING', 'CALLOUTS'],
                    a: ['禁用着陆', '标注'],
                    category: 'UTILITY',
                    parent: '',
                    children: [],
                },
            ],
        },
    ],

    iceman: [
        {
            name: ['SET HEADING', 'RELATIVE'],
            a: ['设置', '相对航向'],
            parent: '',
            children: [
                {
                    name: ['RIGHT', '5 DEGREES'],
                    a: ['向右', '5 度'],
                    parent: '',
                    children: [],
                },
                {
                    name: ['RIGHT', '10 DEGREES'],
                    a: ['向右', '10 度'],
                    parent: '',
                    children: [],
                },
                {
                    name: ['RIGHT', '30 DEGREES'],
                    a: ['向右', '30 度'],
                    parent: '',
                    children: [],
                },
                {
                    name: ['RIGHT', '45 DEGREES'],
                    a: ['向右', '45 度'],
                    parent: '',
                    children: [],
                },
                {
                    name: ['LEFT', '45 DEGREES'],
                    a: ['向左', '45 度'],
                    parent: '',
                    children: [],
                },
                {
                    name: ['LEFT', '30 DEGREES'],
                    a: ['向左', '30 度'],
                    parent: '',
                    children: [],
                },
                {
                    name: ['LEFT', '10 DEGREES'],
                    a: ['向左', '10 度'],
                    parent: '',
                    children: [],
                },
                {
                    name: ['LEFT', '5 DEGREES'],
                    a: ['向左', '5 度'],
                    parent: '',
                    children: [],
                },
            ],
        },
        {
            name: ['SET HEADING', 'ABSOLUTE'],
            a: ['设置', '绝对航向'],
            parent: '',
            children: [
                {
                    name: 'NORTH',
                    a: '北',
                    parent: '',
                    children: [],
                },
                {
                    name: 'NORTH EAST',
                    a: '东北',
                    parent: '',
                    children: [],
                },
                {
                    name: 'EAST',
                    a: '东',
                    parent: '',
                    children: [],
                },
                {
                    name: 'SOUTH EAST',
                    a: '东南',
                    parent: '',
                    children: [],
                },
                {
                    name: 'SOUTH',
                    a: '南',
                    parent: '',
                    children: [],
                },
                {
                    name: 'SOUTH WEST',
                    a: '西南',
                    parent: '',
                    children: [],
                },
                {
                    name: 'WEST',
                    a: '西',
                    parent: '',
                    children: [],
                },
                {
                    name: 'NORTH WEST',
                    a: '西北',
                    parent: '',
                    children: [],
                },
            ]
        },
        {
            name: 'SET SPEED',
            a: '设置空速',
            parent: '',
            children: [
                {
                    name: '-200 IAKTS',
                    a: '-200 节指示空速',
                    parent: '',
                    children: [],
                },
                {
                    name: '-100 IAKTS',
                    a: '-100 节指示空速',
                    parent: '',
                    children: [],
                },
                {
                    name: '-50 IAKTS',
                    a: '-50 节指示空速',
                    parent: '',
                    children: [],
                },
                {
                    name: '+50 IAKTS',
                    a: '+50 节指示空速',
                    parent: '',
                    children: [],
                },
                {
                    name: '+100 IAKTS',
                    a: '+100 节指示空速',
                    parent: '',
                    children: [],
                },
                {
                    name: '+200 IAKTS',
                    a: '+200 节指示空速',
                    parent: '',
                    children: [],
                },
            ]
        },
        {
            name: ['SET ANGELS', 'RELATIVE'],
            a: ['设置', '相对高度'],
            parent: '',
            children: [
                {
                    name: 'DESCEND 10000',
                    a: '下降 10000',
                    parent: '',
                    children: [],
                },
                {
                    name: 'DESCEND 5000',
                    a: '下降 5000',
                    parent: '',
                    children: [],
                },
                {
                    name: 'DESCEND 1000',
                    a: '下降 1000',
                    parent: '',
                    children: [],
                },
                {
                    name: 'DESCEND 500',
                    a: '下降 500',
                    parent: '',
                    children: [],
                },
                {
                    name: 'CLIMB 500',
                    a: '爬升 500',
                    parent: '',
                    children: [],
                },
                {
                    name: 'CLIMB 1000',
                    a: '爬升 1000',
                    parent: '',
                    children: [],
                },
                {
                    name: 'CLIMB 5000',
                    a: '爬升 5000',
                    parent: '',
                    children: [],
                },
                {
                    name: 'CLIMB 10000',
                    a: '爬升 10000',
                    parent: '',
                    children: [],
                },
            ]
        },
        {
            name: ['SET ANGELS', 'ABSOLUTE'],
            a: ['设置', '绝对高度'],
            parent: '',
            children: [
                {
                    name: 'ANGELS 1',
                    a: '1000 英尺',
                    parent: '',
                    children: [],
                },
                {
                    name: 'ANGELS 5',
                    a: '5000 英尺',
                    parent: '',
                    children: [],
                },
                {
                    name: 'ANGELS 10',
                    a: '10000 英尺',
                    parent: '',
                    children: [],
                },
                {
                    name: 'ANGELS 15',
                    a: '15000 英尺',
                    parent: '',
                    children: [],
                },
                {
                    name: 'ANGELS 20',
                    a: '20000 英尺',
                    parent: '',
                    children: [],
                },
                {
                    name: 'ANGELS 25',
                    a: '25000 英尺',
                    parent: '',
                    children: [],
                },
                {
                    name: 'ANGELS 30',
                    a: '30000 英尺',
                    parent: '',
                    children: [],
                },
                {
                    name: 'ANGELS 35',
                    a: '35000 英尺',
                    parent: '',
                    children: [],
                },
            ]
        },
        {
            name: ['FLY TO POINT', 'ORBIT POINT'],
            a: ['飞向航路点', '盘旋点'],
            parent: '',
            children: [
                {
                    name: ['FLY TO DESTINATION', 'STEER POINT'],
                    a: ['飞向', '目标'],
                    parent: '',
                    children: [],
                },
                {
                    name: ['FLY TO MAP', 'MAKER'],
                    a: ['飞向', '地图标记点'],
                    category: 'UTILITY',
                    parent: '',
                    children: [
                        {
                            name: ['BULLSEYE', 'NNW 15NM', '20 SEC AGO'],
                            a: ['靶眼', '西北偏北 距离15海里', '20 秒前建立'],
                            parent: '',
                            children: [],
                        },
                    ],
                },
                {
                    name: ['ORBIT DESTINATION', 'STEER POINT'],
                    a: ['在目标', '盘旋'],
                    parent: '',
                    children: [
                        {
                            name: ['45 DEGREE ROLL', '5 NM DIAMETER', '400 TAKTS'],
                            a: ['坡度45度', '盘旋直径5海里', '400节真空速'],
                            parent: '',
                            children: [
                                {
                                    name: 'LEFT HAND TURN',
                                    a: '左转盘旋',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: 'RIGHT HAND TURN',
                                    a: '右转盘旋',
                                    parent: '',
                                    children: [],
                                },
                            ],
                        },
                        {
                            name: ['45 DEGREE ROLL', '7 NM DIAMETER', '480 TAKTS'],
                            a: ['坡度45度', '盘旋直径7海里', '480节真空速'],
                            parent: '',
                            children: [
                                {
                                    name: 'LEFT HAND TURN',
                                    a: '左转盘旋',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: 'RIGHT HAND TURN',
                                    a: '右转盘旋',
                                    parent: '',
                                    children: [],
                                },
                            ],
                        },
                        {
                            name: ['45 DEGREE ROLL', '10 NM DIAMETER', '600 TAKTS'],
                            a: ['坡度45度', '盘旋直径10海里', '600节真空速'],
                            parent: '',
                            children: [
                                {
                                    name: 'LEFT HAND TURN',
                                    a: '左转盘旋',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: 'RIGHT HAND TURN',
                                    a: '右转盘旋',
                                    parent: '',
                                    children: [],
                                },
                            ],
                        },
                        {
                            name: ['30 DEGREE ROLL', '7 NM DIAMETER', '360 TAKTS'],
                            a: ['坡度30度', '盘旋直径7海里', '360节真空速'],
                            parent: '',
                            children: [
                                {
                                    name: 'LEFT HAND TURN',
                                    a: '左转盘旋',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: 'RIGHT HAND TURN',
                                    a: '右转盘旋',
                                    parent: '',
                                    children: [],
                                },
                            ],
                        },
                        {
                            name: ['30 DEGREE ROLL', '10 NM DIAMETER', '450 TAKTS'],
                            a: ['坡度30度', '盘旋直径10海里', '450节真空速'],
                            parent: '',
                            children: [
                                {
                                    name: 'LEFT HAND TURN',
                                    a: '左转盘旋',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: 'RIGHT HAND TURN',
                                    a: '右转盘旋',
                                    parent: '',
                                    children: [],
                                },
                            ],
                        },
                        {
                            name: ['30 DEGREE ROLL', '15 NM DIAMETER', '550 TAKTS'],
                            a: ['坡度30度', '盘旋直径15海里', '550节真空速'],
                            parent: '',
                            children: [
                                {
                                    name: 'LEFT HAND TURN',
                                    a: '左转盘旋',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: 'RIGHT HAND TURN',
                                    a: '右转盘旋',
                                    parent: '',
                                    children: [],
                                },
                            ],
                        },
                        {
                            name: ['30 DEGREE ROLL', '20 NM DIAMETER', '620 TAKTS'],
                            a: ['坡度30度', '盘旋直径20海里', '620节真空速'],
                            parent: '',
                            children: [
                                {
                                    name: 'LEFT HAND TURN',
                                    a: '左转盘旋',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: 'RIGHT HAND TURN',
                                    a: '右转盘旋',
                                    parent: '',
                                    children: [],
                                },
                            ],
                        },
                        {
                            name: ['30 DEGREE ROLL', '25 NM DIAMETER', '620 TAKTS'],
                            a: ['坡度30度', '盘旋直径25海里', '620节真空速'],
                            parent: '',
                            children: [
                                {
                                    name: 'LEFT HAND TURN',
                                    a: '左转盘旋',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: 'RIGHT HAND TURN',
                                    a: '右转盘旋',
                                    parent: '',
                                    children: [],
                                },
                            ],
                        },
                    ],
                },
                {
                    name: ['ORBIT MAP', 'MAKER'],
                    a: ['在地图标记点', '盘旋'],
                    category: 'UTILITY',
                    parent: '',
                    children: [
                        {
                            name: ['BULLSEYE', 'N 16NM', '1 MIN AGO'],
                            a: ['靶眼', '北 距离16海里', '1 分钟前建立'],
                            parent: '',
                            children: [
                                {
                                    name: 'LEFT HAND TURN',
                                    a: '左转盘旋',
                                    parent: '',
                                    children: [],
                                },
                                {
                                    name: 'RIGHT HAND TURN',
                                    a: '右转盘旋',
                                    parent: '',
                                    children: [],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            name: 'HOLD CURRENT',
            a: '保持当前',
            parent: '',
            children: [],
        },
        {
            name: '_blank',
            a: [],
            parent: '',
            children: [],
        },
    ],

    categories: [
        {
            // basic
            name: 'radar',
            value: 'https://www.flaticon.com/svg/static/icons/svg/2590/2590397.svg',

            // icon
            startX: 6,
            startY: 7,
            sizeX: 50,
            sizeY: 50,

            // color
            color: '#d4c618'
        },
        {
            name: 'radio',
            value: 'https://www.flaticon.com/svg/static/icons/svg/2590/2590397.svg',

            startX: 326,
            startY: 7,
            sizeX: 50,
            sizeY: 50,

            color: '#00acc3'
        },
        {
            name: 'weapons',
            value: 'https://www.flaticon.com/svg/static/icons/svg/2590/2590397.svg',

            startX: 262,
            startY: 7,
            sizeX: 50,
            sizeY: 50,

            color: '#fd9201'
        },
        {
            name: 'defensive',
            value: 'https://www.flaticon.com/svg/static/icons/svg/2590/2590397.svg',

            startX: 198,
            startY: 7,
            sizeX: 50,
            sizeY: 50,

            color: '#49c601'
        },
        {
            name: 'utility',
            value: 'https://www.flaticon.com/svg/static/icons/svg/2590/2590397.svg',

            startX: 70,
            startY: 7,
            sizeX: 50,
            sizeY: 50,

            color: '#3e8df0'
        },
        {
            name: '',
            value: 'https://www.flaticon.com/svg/static/icons/svg/2590/2590397.svg',

            startX: 70,
            startY: 7,
            sizeX: 50,
            sizeY: 50,

            color: '#d8d8d8'
        },
    ],

}