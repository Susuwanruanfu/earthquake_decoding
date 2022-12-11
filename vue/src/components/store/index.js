import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import * as  echarts from 'echarts'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fileList: [],
    drawer1: false,
    drawer2: false,
    errorState: false,
    load1: false,
    load2: false,
    show1: true,
    show2: false,
    show3: false,
    show4: false,
    show5: false,
    loading:false,
    option: {
      //标题样式
      title: {
        text: '2013~2022模拟中国地震分布地图',
        x: "center",
        y: '0%',
        textStyle: {
          fontSize: 20,
          color: "#333"
        },
      },
      toolbox: {
        feature: {
          restore: {},
          saveAsImage: {}
        }
      },
      //这里设置提示框 (鼠标悬浮效果)
      tooltip: {
        //数据项图形触发
        trigger: 'item',
        //提示框浮层的背景颜色。 (鼠标悬浮后的提示框背景颜色)
        backgroundColor: "white",
        //字符串模板(地图): {a}（系列名称），{b}（区域名称），{c}（合并数值）,{d}（无）
        formatter: '地区：{b}<br/>10年内发生地震次数：{c}'
      },
      //视觉映射组件
      visualMap: {
        top: 'center',
        left: 'left',
        // 数据的范围
        min: 1,
        max: 50,
        text: ['地震高发', '地震安全'],
        realtime: true,  //拖拽时，是否实时更新
        calculable: true,  //是否显示拖拽用的手柄
        inRange: {
          // 颜色分布
          color: ['white', 'rgb(221,171,85)', 'rgb(169,0,0)']
        }
      },
      series: [
        {
          name: '震频',
          type: 'map',
          mapType: 'china',
          roam: true,
          //是否开启鼠标缩放和平移漫游
          itemStyle: {
            //地图区域的多边形 图形样式
            normal: {
              //是图形在默认状态下的样式
              label: {
                show: true,//是否显示标签
                textStyle: {
                  color: "black"
                }
              }
            },
            zoom: 1,
            //地图缩放比例,默认为1
            emphasis: {
              //是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
              label: { show: true }
            }
          },
          top: '10%',
          left: '15%',
          data: [{ name: "新疆", value: '9' },
          { name: "西藏", value: '11' },
          { name: "台湾", value: '14' },
          { name: "青海", value: '13' },
          { name: "云南", value: '9' },
          { name: "甘肃", value: '7' },
          { name: "内蒙古", value: '5' },
          { name: "吉林", value: '2' },
          { name: "河北", value: '39' },
          { name: "宁夏", value: '4' },
          { name: "陕西", value: '5' },
          { name: "山西", value: '6' },
          { name: "四川", value: '47' },
          { name: "重庆", value: '38' },
          { name: "河南", value: '3' },
          { name: "山东", value: '6' },
          { name: "黑龙江", value: '7' },
          { name: "辽宁", value: '4' },
          { name: "湖北", value: '6' },
          { name: "安徽", value: '4' },
          { name: "湖南", value: '17' },
          { name: "贵州", value: '3' },
          { name: "广西", value: '31' },
          { name: "广东", value: '19' },
          { name: "江西", value: '5' },
          { name: "江苏", value: '3' },
          { name: "浙江", value: '28' },
          { name: "福建", value: '22' },
          { name: "澳门", value: '2' },
          { name: "香港", value: '2' },
          { name: "海南", value: '4' },
          { name: "北京", value: '5' },
          { name: "上海", value: '11' },
          { name: "南海诸岛", value: '4' },
          ]
        }
      ]
    },
    option_2_line_1: {
      tooltip: {
        trigger: 'axis',
        position: function (pt) {
          return [pt[0], '20%'];
        }
      },
      title: {
        left: 'center',
        text: '历年自然灾害死亡人数'
      },
      toolbox: {
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          restore: {},
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: true,
        data: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%']
      },
      dataZoom: [
        {
          type: 'inside',
          handleSize: 3,
          start: 0,
          end: 10,
          realtime: true,//拖动时实时更新
        },
        {
          start: 0,
          end: 10
        }
      ],
      series: [
        {
          name: '死亡人数',
          type: 'line',
          symbol: 'none',
          sampling: 'lttb',
          itemStyle: {
            color: 'rgb(88,163,246)'
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(88,163,246)'
              },
              {
                offset: 1,
                color: 'rgb(255, 70, 131)'
              }
            ])
          },
          data: [1002, 1675, 2759, 1333, 1407, 1223, 1227, 1123, 1598, 4085, 3445, 6541, 1114, 1530, 2004, 1818, 10213, 1706, 1001, 589, 788, 591]
        }
      ]
    },
    option_2_line_2: {
      tooltip: {
        trigger: 'axis',
        position: function (pt) {
          return [pt[0], '10%'];
        }
      },
      title: {
        left: 'center',
        text: '历年地震发生次数'
      },
      toolbox: {
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          restore: {},
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: true,
        data: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%']
      },
      dataZoom: [
        {
          type: 'inside',
          handleSize: 3,
          start: 0,
          end: 10,
          realtime: true,//拖动时实时更新
        },
        {
          start: 0,
          end: 10
        }
      ],
      series: [
        {
          name: '地震次数',
          type: 'line',
          symbol: 'none',
          sampling: 'lttb',
          itemStyle: {
            color: 'rgb(88,163,246)'
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(246,88,159)'
              },
              {
                offset: 1,
                color: 'rgb(10,135,213)'
              }
            ])
          },
          data: [32, 44, 12, 64, 18, 45, 27, 11, 49, 23, 24, 16, 55, 38, 31, 11, 87, 76, 14, 56, 43, 32, 22]
        }
      ]
    },
    option_3_pie_1 : {
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      toolbox: {
        feature: {
          restore: {},
          saveAsImage: {}
        }
      },
      title: {
        left: 'center',
        text: '数据载体分布图'
      },
      // position: function (pt) {
      //   return [pt[0], '10%'];
      // },
      series: [
        {
          name: '数据载体分布图',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 5, name: '文字' },
            { value: 20, name: '图像' },
            { value: 17, name: '视频' },
            { value: 10, name: '音频' },
            { value: 43, name: '其他' }
          ]
        }
      ]
    },
    disasterInfo: [],
  },
  getters: {

  },
  //里面定义方法，操作state方法
  mutations: {
    show1(state) {
      state.show1 = true;
      state.show2 = false;
      state.show3 = false;
      state.show4 = true;
      state.show5 = false;
    },
    show2(state) {
      state.show1 = false;
      state.show2 = true;
      state.show3 = false;
      state.show4 = false;
      state.show5 = false;
    },
    show3(state) {
      state.show3 = true;
    },
    show4(state) {
      state.show1 = false;
      state.show2 = false;
      state.show3 = false;
      state.show4 = true;
      state.show5 = false;
    },
    show5(state) {
      state.show1 = false;
      state.show2 = false;
      state.show3 = false;
      state.show4 = false;
      state.show5 = true;
    },
    drawer1Open(state) {
      state.drawer1 = true;
    },
    drawer2Open(state) {
      state.drawer2 = true;
    },
    getData(state){
      state.disasterInfo=[
      {
        code: '320505000000202001010808082020101003',
        location: '江苏省 苏州市 虎丘区',
        time: '2020-01-01 08:08:08',
        origin: '泛在感知数据 舆情网感知',
        carrier: '文字',
        type: '震情-震情信息',
        label: '震级',
        description: '9级',
      }
        ,
        {
          code: '320505000000202001010808082021301002',
          location: '江苏省 苏州市 虎丘区',
          time: '2020-01-01 08:08:08',
          origin: '泛在感知数据 舆情网感知',
          carrier: '图像',
          type: '房屋破坏-土木',
          label: '严重损坏面积',
          description: '20平方公里',
        }
        ,
        {
          code: '320505000000202001010808082023303001',
          location: '江苏省 苏州市 虎丘区',
          time: '2020-01-01 08:08:08',
          origin: '泛在感知数据 舆情网感知',
          carrier: '视频',
          type: '房屋破坏-砖混',
          label: '一般损坏面积',
          description: '5平方公里',
        }
        ,
        {
          code: '110101000000200309081112133000201001',
          location: '北京市 东城区',
          time: '2003-09-08 11:12:13',
          origin: '其他数据',
          carrier: '文字',
          type: '人员伤亡及失踪-死亡',
          label: '受灾人数',
          description: '大量',
        }
        ,
        {
          code: '110101000000200309081112133001304002',
          location: '北京市 东城区',
          time: '2003-09-08 11:12:13',
          origin: '其他数据',
          carrier: '图像',
          type: '房屋破坏-框架',
          label: '严重损坏面积',
          description: '37平方公里',
        }
        ,
        {
          code: '110101000000200309081112133004401002',
          location: '北京市 东城区',
          time: '2003-09-08 11:12:13',
          origin: '其他数据',
          carrier: '视频',
          type: '生命线工程灾情-交通',
          label: '受灾范围',
          description: '全境',
        }
        ,
        {
          code: '310101013003200809101417201010301002',
          location: '上海市 市辖区 黄浦区 外滩街道 北京居委会',
          time: '2008-09-10 14:17:20',
          origin: '业务报送数据 前方地震应急指挥部',
          carrier: '文字',
          type: '房屋破坏-土木',
          label: '严重损坏面积',
          description: '10平方公里',
        }
        ,
        {
          code: '310101013003200809101417201011301002',
          location: '上海市 市辖区 黄浦区 外滩街道 北京居委会',
          time: '2008-09-10 14:17:20',
          origin: '业务报送数据 前方地震应急指挥部',
          carrier: '图像',
          type: '房屋破坏-土木',
          label: '严重损坏面积',
          description: '20平方公里',
        }
        ,
        {
          code: '310101013003200809101417201014401001',
          location: '上海市 市辖区 黄浦区 外滩街道 北京居委会',
          time: '2008-09-10 14:17:20',
          origin: '业务报送数据 前方地震应急指挥部',
          carrier: '视频',
          type: '生命线工程灾情-交通',
          label: '受灾设施数',
          description: '较大量',
        }
        ,
        {
          code: '230100000000201603090306092000501001',
          location: '黑龙江省 哈尔滨市',
          time: '2016-03-09 03:06:09',
          origin: '泛在感知数据 互联网感知',
          carrier: '文字',
          type: '次生灾害-崩塌',
          label: '灾害损失',
          description: '较大量',
        }
        ,
        {
          code: '230100000000201603090306092001505002',
          location: '黑龙江省 哈尔滨市',
          time: '2016-03-09 03:06:09',
          origin: '泛在感知数据 互联网感知',
          carrier: '图像',
          type: '次生灾害-地裂',
          label: '灾害范围',
          description: '较大范围',
        }
        ,
        {
          code: '230100000000201603090306092004203001',
          location: '黑龙江省 哈尔滨市',
          time: '2016-03-09 03:06:09',
          origin: '泛在感知数据 互联网感知',
          carrier: '视频',
          type: '人员伤亡及失踪-失踪',
          label: '受灾人数',
          description: '98人',
        }
        ,
      {
        code: '110108008024202209010000002023301002',
        location: '北京市 海淀区 北太平庄街道 邮电大学社区居委会',
        longitude: '116.364594',
        latitude: '39.96725',
        time: '2022-09-01 00:00:00',
        origin: '泛在感知数据-舆情网感知',
        carrier: '视频',
        type: '房屋破坏-土木',
        label: '严重损坏面积',
        description: '10平方公里',
      }
        ,
      {
        code: '110108008024202209010000012023301002',
        location: '北京市 海淀区 北太平庄街道 邮电大学社区居委会',
        longitude: '116.364594',
        latitude: '39.96725',
        time: '2022-09-01 00:00:01',
        origin: '泛在感知数据-舆情网感知',
        carrier: '视频',
        type: '房屋破坏-土木',
        label: '严重损坏面积',
        description: '10平方公里',
      }
        ,
      {
        code: '110108008024202209010000002023301002',
        location: '北京市 海淀区 北太平庄街道 邮电大学社区居委会',
        longitude: '116.364594',
        latitude: '39.96725',
        time: '2022-09-01 00:00:00',
        origin: '泛在感知数据-舆情网感知',
        carrier: '视频',
        type: '房屋破坏-土木',
        label: '严重损坏面积',
        description: '10平方公里',
      }
        ,
      {
        code: '110108008024202209010000002020301002',
        location: '北京市 海淀区 北太平庄街道 邮电大学社区居委会',
        longitude: '116.364594',
        latitude: '39.96725',
        time: '2022-09-01 00:00:00',
        origin: '泛在感知数据-舆情网感知',
        carrier: '文本',
        type: '房屋破坏-土木',
        label: '严重损坏面积',
        description: '10平方公里',
      }
        ,
      {
        code: '110108008024202209010000002021301002',
        location: '北京市 海淀区 北太平庄街道 邮电大学社区居委会',
        longitude: '116.364594',
        latitude: '39.96725',
        time: '2022-09-01 00:00:00',
        origin: '泛在感知数据-舆情网感知',
        carrier: '图像',
        type: '房屋破坏-土木',
        label: '严重损坏面积',
        description: '10平方公里',
      }
        ,
      {
        code: '110108008024202209010000002021301002',
        location: '北京市 海淀区 北太平庄街道 邮电大学社区居委会',
        longitude: '116.364594',
        latitude: '39.96725',
        time: '2022-09-01 00:00:00',
        origin: '泛在感知数据-舆情网感知',
        carrier: '图像',
        type: '房屋破坏-土木',
        label: '严重损坏面积',
        description: '10平方公里',
      }
        ,
      {
        code: '110108008024202209010000002021301002',
        location: '北京市 海淀区 北太平庄街道 邮电大学社区居委会',
        longitude: '116.364594',
        latitude: '39.96725',
        time: '2022-09-01 00:00:00',
        origin: '泛在感知数据-舆情网感知',
        carrier: '图像',
        type: '房屋破坏-土木',
        label: '严重损坏面积',
        description: '10平方公里',
      }
        ,
      {
        code: '110108008024202209010000002021301002',
        location: '北京市 海淀区 北太平庄街道 邮电大学社区居委会',
        longitude: '116.364594',
        latitude: '39.96725',
        time: '2022-09-01 00:00:00',
        origin: '泛在感知数据-舆情网感知',
        carrier: '图像',
        type: '房屋破坏-土木',
        label: '严重损坏面积',
        description: '10平方公里',
      }
        ,
      {
        code: '110108008024202209010000002021301002',
        location: '北京市 海淀区 北太平庄街道 邮电大学社区居委会',
        longitude: '116.364594',
        latitude: '39.96725',
        time: '2022-09-01 00:00:00',
        origin: '泛在感知数据-舆情网感知',
        carrier: '图像',
        type: '房屋破坏-土木',
        label: '严重损坏面积',
        description: '10平方公里',
      }
        ,
      {
        code: '110108008024202209010807062020301002',
        location: '北京市 海淀区 北太平庄街道 邮电大学社区居委会',
        longitude: '116.364594',
        latitude: '39.96725',
        time: '2022-09-01 08:07:06',
        origin: '泛在感知数据-舆情网感知',
        carrier: '文本',
        type: '房屋破坏-土木',
        label: '严重损坏面积',
        description: '10平方公里',
      }
        ,

      {
        code: '13012620020602105220203001010203002',
        location: '河北省 石家庄市 灵寿县',
        longitude: '116.41338',
        latitude: '39.91092',
        time: '2021-05-22 02:04:00',
        carrier: '文字',
        type: '人员伤亡及失踪-失踪',
        label: '受灾程度',
        description: '500人',
        origin: '业务报送数据-后方地震应急指挥部',
      },
      {
        code: '310101002001202101011212121811201001',
        location: '上海市 黄浦区 南京东路街道 云南中路居委会',
        longitude: '121.48397',
        latitude: '31.23989',
        time: '2021-01-01 12:12:12',
        origin: '业务报送数据-地方地震局应急信息服务相关技术系统',
        carrier: '图像',
        type: '人员伤亡及失踪-死亡',
        label: '受灾人数',
        description: '114514人',
      }
      ,
      {
        code: '310101002001202101011212121811201001',
        location: '上海市 黄浦区 南京东路街道 云南中路居委会',
        longitude: '121.48397',
        latitude: '31.23989',
        time: '2021-01-01 12:12:12',
        origin: '业务报送数据-地方地震局应急信息服务相关技术系统',
        carrier: '图像',
        type: '人员伤亡及失踪-死亡',
        label: '受灾人数',
        description: '114514人',
      }
      ,
      {
        code: '310101002001202101011212121811201001',
        location: '上海市 黄浦区 南京东路街道 云南中路居委会',
        longitude: '121.48397',
        latitude: '31.23989',
        time: '2021-01-01 12:12:12',
        origin: '业务报送数据-地方地震局应急信息服务相关技术系统',
        carrier: '图像',
        type: '人员伤亡及失踪-死亡',
        label: '受灾人数',
        description: '114514人',
      }
      ,
      {
        code: '310101002001202101011212121811201001',
        location: '上海市 黄浦区 南京东路街道 云南中路居委会',
        longitude: '121.48397',
        latitude: '31.23989',
        time: '2021-01-01 12:12:12',
        origin: '业务报送数据-地方地震局应急信息服务相关技术系统',
        carrier: '图像',
        type: '人员伤亡及失踪-死亡',
        label: '受灾人数',
        description: '114514人',
      }
      ,
      {
        code: '310101002001202101011212121813201001',
        location: '上海市 黄浦区 南京东路街道 云南中路居委会',
        longitude: '121.48397',
        latitude: '31.23989',
        time: '2021-01-01 12:12:12',
        origin: '业务报送数据-地方地震局应急信息服务相关技术系统',
        carrier: '视频',
        type: '人员伤亡及失踪-死亡',
        label: '受灾人数',
        description: '114514人',
      }
      ,
      {
        code: '310101002001202101011212121813201001',
        location: '上海市 黄浦区 南京东路街道 云南中路居委会',
        longitude: '121.48397',
        latitude: '31.23989',
        time: '2021-01-01 12:12:12',
        origin: '业务报送数据-地方地震局应急信息服务相关技术系统',
        carrier: '视频',
        type: '人员伤亡及失踪-死亡',
        label: '受灾人数',
        description: '114514人',
      }
      ,
      {
        code: '310101002001202101011212121811201001',
        location: '上海市 黄浦区 南京东路街道 云南中路居委会',
        longitude: '121.48397',
        latitude: '31.23989',
        time: '2021-01-01 12:12:12',
        origin: '业务报送数据-地方地震局应急信息服务相关技术系统',
        carrier: '图像',
        type: '人员伤亡及失踪-死亡',
        label: '受灾人数',
        description: '114514人',
      }
      ,
      {
        code: '310101002001202101011212121811201001',
        location: '上海市 黄浦区 南京东路街道 云南中路居委会',
        longitude: '121.48397',
        latitude: '31.23989',
        time: '2021-01-01 12:12:12',
        origin: '业务报送数据-地方地震局应急信息服务相关技术系统',
        carrier: '图像',
        type: '人员伤亡及失踪-死亡',
        label: '受灾人数',
        description: '114514人',
      }
      ,
      {
        code: '310101002001202101011212121813201001',
        location: '上海市 黄浦区 南京东路街道 云南中路居委会',
        longitude: '121.48397',
        latitude: '31.23989',
        time: '2021-01-01 12:12:12',
        origin: '业务报送数据-地方地震局应急信息服务相关技术系统',
        carrier: '视频',
        type: '人员伤亡及失踪-死亡',
        label: '受灾人数',
        description: '114514人',
      },
      {
        code: '310101002001202101011212121813201001',
        location: '上海市 黄浦区 南京东路街道 云南中路居委会',
        longitude: '121.48397',
        latitude: '31.23989',
        time: '2021-01-01 12:12:12',
        origin: '业务报送数据-地方地震局应急信息服务相关技术系统',
        carrier: '视频',
        type: '人员伤亡及失踪-死亡',
        label: '受灾人数',
        description: '114514人',
      },
      {
        code: '310101002001202101011212121813201001',
        location: '上海市 黄浦区 南京东路街道 云南中路居委会',
        longitude: '121.48397',
        latitude: '31.23989',
        time: '2021-01-01 12:12:12',
        origin: '业务报送数据-地方地震局应急信息服务相关技术系统',
        carrier: '视频',
        type: '人员伤亡及失踪-死亡',
        label: '受灾人数',
        description: '114514人',
      },

      {
        code: '310101002001202101011212121813201001',
        location: '上海市 黄浦区 南京东路街道 云南中路居委会',
        longitude: '121.48397',
        latitude: '31.23989',
        time: '2021-01-01 12:12:12',
        origin: '业务报送数据-地方地震局应急信息服务相关技术系统',
        carrier: '视频',
        type: '人员伤亡及失踪-死亡',
        label: '受灾人数',
        description: '114514人',
      },
      {
        code: '110108008024202209010000002023301002',
        location: '北京市 海淀区 北太平庄街道 邮电大学社区居委会',
        longitude: '116.364594',
        latitude: '39.96725',
        time: '2022-09-01 00:00:00',
        origin: '泛在感知数据-舆情网感知',
        carrier: '视频',
        type: '房屋破坏-土木',
        label: '严重损坏面积',
        description: '10平方公里',
      }
       ,
      {
        code: '110108008024202209010000012023301002',
        location: '北京市 海淀区 北太平庄街道 邮电大学社区居委会',
        longitude: '116.364594',
        latitude: '39.96725',
        time: '2022-09-01 00:00:01',
        origin: '泛在感知数据-舆情网感知',
        carrier: '视频',
        type: '房屋破坏-土木',
        label: '严重损坏面积',
        description: '10平方公里',
      }
       ,
      {
        code: '110108008024202209010000002023301002',
        location: '北京市 海淀区 北太平庄街道 邮电大学社区居委会',
        longitude: '116.364594',
        latitude: '39.96725',
        time: '2022-09-01 00:00:00',
        origin: '泛在感知数据-舆情网感知',
        carrier: '视频',
        type: '房屋破坏-土木',
        label: '严重损坏面积',
        description: '10平方公里',
      },

      {
        code: '110108008024202209010000002020301002',
        location: '北京市 海淀区 北太平庄街道 邮电大学社区居委会',
        longitude: '116.364594',
        latitude: '39.96725',
        time: '2022-09-01 00:00:00',
        origin: '泛在感知数据-舆情网感知',
        carrier: '文本',
        type: '房屋破坏-土木',
        label: '严重损坏面积',
        description: '10平方公里',
      },

      {
        code: '110108008024202209010000002021301002',
        location: '北京市 海淀区 北太平庄街道 邮电大学社区居委会',
        longitude: '116.364594',
        latitude: '39.96725',
        time: '2022-09-01 00:00:00',
        origin: '泛在感知数据-舆情网感知',
        carrier: '图像',
        type: '房屋破坏-土木',
        label: '严重损坏面积',
        description: '10平方公里',
      },

      {
        code: '110108008024202209010000002021301002',
        location: '北京市 海淀区 北太平庄街道 邮电大学社区居委会',
        longitude: '116.364594',
        latitude: '39.96725',
        time: '2022-09-01 00:00:00',
        origin: '泛在感知数据-舆情网感知',
        carrier: '图像',
        type: '房屋破坏-土木',
        label: '严重损坏面积',
        description: '10平方公里',
      },

      {
        code: '110108008024202209010000002021301002',
        location: '北京市 海淀区 北太平庄街道 邮电大学社区居委会',
        longitude: '116.364594',
        latitude: '39.96725',
        time: '2022-09-01 00:00:00',
        origin: '泛在感知数据-舆情网感知',
        carrier: '图像',
        type: '房屋破坏-土木',
        label: '严重损坏面积',
        description: '10平方公里',
      }
       ,
      {
        code: '110108008024202209010000002021301002',
        location: '北京市 海淀区 北太平庄街道 邮电大学社区居委会',
        longitude: '116.364594',
        latitude: '39.96725',
        time: '2022-09-01 00:00:00',
        origin: '泛在感知数据-舆情网感知',
        carrier: '图像',
        type: '房屋破坏-土木',
        label: '严重损坏面积',
        description: '10平方公里',
      }
       ,
      {
        code: '110108008024202209010000002021301002',
        location: '北京市 海淀区 北太平庄街道 邮电大学社区居委会',
        longitude: '116.364594',
        latitude: '39.96725',
        time: '2022-09-01 00:00:00',
        origin: '泛在感知数据-舆情网感知',
        carrier: '视频图像',
        type: '房屋破坏-土木',
        label: '严重损坏面积',
        description: '10平方公里',
      }
       ,
      {
        code: '110108008024202209010807062020301002',
        location: '北京市 海淀区 北太平庄街道 邮电大学社区居委会',
        longitude: '116.364594',
        latitude: '39.96725',
        time: '2022-09-01 08:07:06',
        origin: '泛在感知数据-舆情网感知',
        carrier: '文本',
        type: '房屋破坏-土木',
        label: '严重损坏面积',
        description: '10平方公里',
      }
       ,
      {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      }, {
        code: '-',
        location: '-',
        longitude: '-',
        latitude: '-',
        time: '-',
        carrier: '-',
        type: '-',
        label: '-',
        description: '-',
        origin: '-',
      },]
    },
    // getSelectorOpt(state) { //获取电站复选框信息

    // },
    getOption_1_line(state, id) { //获取功能1折线图信息
      console.log(id)
      //旧接口
      // axios({
      //   url: 'http://10.128.184.154:8088/api/generation/last-year',
      //   method: 'POST',
      //   params: { station: id }
      // }).then(res => {
      //   state.option_1_line.series[0].data = res.data
      // })
      axios({
        url: 'http://10.128.184.154:8088/api/test/last-year',
        method: 'GET',
      }).then(res => {
        state.option_1_line.series[0].data = res.data
      })
    },
    getOption_1_bar(state, id) { //获取功能1柱状图信息
      console.log(id)
      //旧接口
      // axios({
      //   url: 'http://10.128.184.154:8088/api/generation/last-month',
      //   method: 'POST',
      //   params: { station: id }
      // }).then(res => {
      //   console.log(res.data)
      //   state.option_1_bar.series[0].data = res.data
      // })
      axios({
        url: 'http://10.128.184.154:8088/api/test/last-month',
        method: 'GET',
      }).then(res => {
        console.log(res.data)
        state.option_1_bar.series[0].data = res.data
      })
    },
    getOption_2_line_1(state, id) { //获取功能2折线图1信息
      console.log(id)
      // for (let i = 0; i < 96; i++) {
      //   state.option_2_line_1.series[0].data[i] = 1.0
      // }
      axios({
        url: 'http://10.128.184.154:8088/api/test/96-future',
        method: 'GET',
      }).then(res => {
        console.log("yuce")
        console.log(res.data)
        for (let i = 0; i < 96; i++) {
          state.option_2_line_1.series[0].data[i] = res.data[i].predictVal
          state.forecastFactor[i].forecast = res.data[i].predictVal
          state.forecastFactor[i].humidity = res.data[i].humidity
          state.forecastFactor[i].light = res.data[i].lightIntensity
          state.forecastFactor[i].wind = res.data[i].windSpeed
          state.forecastFactor[i].temper = res.data[i].temperature
        }
        state.forecastFactor.splice(1, 0)
      })
    },
    getOption_2_line_2(state, id) { //获取功能2折线图2信息
      console.log(id)
      // for (let i = 0; i < 96; i++) {
      //   state.option_2_line_2.series[0].data[i] = 1.0
      // }
      axios({
        url: 'http://10.128.184.154:8088/api/test/96-error',
        method: 'GET',
      }).then(res => {
        console.log("wucha")
        console.log(res.data)
        for (let i = 0; i < 96; i++) {
          state.option_2_line_2.series[0].data = res.data
        }
      })
    },
    getForecastFactor(state, id) { //获取未来24h内预测因素信息
      console.log(id)
      for (let i = 0; i < 96; i++) {
        state.forecastFactor[i].time = state.option_2_line_2.xAxis.data[i]
      }
      state.forecastFactor.splice(1, 0)
    },
    getErrorState(state) {
      axios({
        url: 'http://10.128.184.154:8088/api/test/is-error',
        method: 'GET',
      }).then(res => {
        state.errorState = res.data
      })
      state.errorState
    }
  },
  // 操作异步操作mutation
  actions: {

  },
  modules: {

  },
})
