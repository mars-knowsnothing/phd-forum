<!-- src/views/Schedule.vue -->
<template>
  <div class="schedule-page">
    <h1 class="text-2xl font-bold text-center">{{ $t('schedule.title') }}</h1>

    <div class="mt-8 space-y-6">
      <p v-for="(paragraph, index) in content" :key="index" class="text-justify text-lg leading-relaxed">
        {{ paragraph }}
      </p>
    </div>

    <div class="mt-8 space-y-6 schedule-container">
      <section v-for="(day, index) in schedule" :key="index" class="day-section">
        <h2 class="day-title">{{ day.date }}</h2>

        <div v-for="event in day.events" :key="event.time" class="event">
          <h3>{{ event.time }} {{ event.location }}</h3>
          <ul>
            <li v-for="session in event.sessions" :key="session.time" class="session-item">
              <strong>{{ session.time }}</strong> - {{ session.description }}
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Session {
  time: string;
  description: string;
}

interface Event {
  time: string;
  location: string;
  sessions: Session[];
}

interface Day {
  date: string;
  events: Event[];
}

export default defineComponent({
  name: "Schedule",
  data() {
    return {
      schedule: [
        {
    "date": "12月5日 下午",
    "events": [
      {
        "time": "15:30",
        "location": "北京大学朗润园科维理所报告厅",
        "sessions": [
          {
            "time": "15:30",
            "description": "Wang Lingyu（Univ. of Groninggen）: KIAA colloquium: The evolution of massive galaxies - from a tripod approach of observations, simulations, and AI（欢迎参加！)"
          }
        ]
      }
    ]
  },
  {
    "date": "12月6日 上午 主题1: 星系与宇宙学",
    "events": [
      {
        "time": "8:00-12:20",
        "location": "科维理所大厅",
        "sessions": [
          { "time": "8:00-9:00", "description": "报到" },
          { "time": "9:00-9:10", "description": "开幕式 (科维理所报告厅)" },
          { "time": "9:10-10:10", "description": "北京大学何子山院士（特邀报告）：The Ecosystem of Supermassive Black Holes, Interstellar Medium, and Star Formation in Galaxies" },
          { "time": "10:10-10:30", "description": "张子键（北大）：Investigation of the variability of little red dots using JWST data" },
          { "time": "10:30-11:00", "description": "合影，茶歇" },
          { "time": "11:00-11:20", "description": "林如秋（上海台）：Massive BHs in Low-z Compact Emission-line Galaxies" },
          { "time": "11:20-11:40", "description": "王文杰（湖南师大）：Constraints on cosmic star formation history via a new modeling of the radio luminosity function of star-forming galaxies" },
          { "time": "11:40-12:00", "description": "韦乐瑶（清华大学）：Zangetsu: A Candidate of Isolated, Quiescent and Distorted Ultra-Diffuse Galaxy in the COSMOS Field?" },
          { "time": "12:00-12:20", "description": "Lingkun Wen（上海台）：NeutralUniverseMachine: Predictions of HI gas in Different Theoretical Models" }
        ]
      }
    ]
  },
  {
    "date": "12月6日 下午 主题1: 星系与宇宙学",
    "events": [
      {
        "time": "14:00-17:40",
        "location": "科维理所报告厅",
        "sessions": [
          { "time": "14:00-15:00", "description": "上海交大景益鹏院士（特邀报告）：S8危机可能不是真的？" },
          { "time": "15:00-15:20", "description": "Feihong He（上海交大）：Why artificial disruption is not a concern for current cosmological simulation" },
          { "time": "15:20-15:50", "description": "茶歇" },
          { "time": "15:50-16:10", "description": "曾雨轩（香港大学）：Galaxy cluster’s ICM profiles and its relationship to BCG star formation" },
          { "time": "16:10-16:30", "description": "朱帅儒（上海台）：Lyman Continuum Leakers in the GOODS-S" },
          { "time": "16:30-16:50", "description": "张家硕（香港大学）：Constraining Wave Dark Matter Mass with Lensed High-z Galaxies" },
          { "time": "16:50-17:10", "description": "马庆麟（清华大学）：New insight on the secondary bias: Dependence on the halo definition and the orientation" },
          { "time": "17:10-17:30", "description": "许朔（清华大学）：Connection between Extended Outskirt of Massive Galaxies and Halo Assembly History" },
          { "time": "17:30-17:40", "description": "Poster Intro: 叶广平（华中科大）：Machine Learning-based Search of High-redshift Quasars; 褚佳妮（清华大学）：Galaxy stellar and total mass estimation using machine learning" }
        ]
      }
    ]
  },
  {
    "date": "12月7日 上午 主题2: 高能天体物理",
    "events": [
      {
        "time": "9:00-12:10",
        "location": "科维理所报告厅",
        "sessions": [
          { "time": "9:00-10:00", "description": "高能物理所曹臻院士（特邀报告）：拉索发现银河深处的“极端”粒子加速器" },
          { "time": "10:00-10:20", "description": "Zikun Lin（国家天文台）：Unraveling the hybrid origins of the X-ray non-thermal emission from IGR J17091-3624" },
          { "time": "10:20-10:50", "description": "茶歇" },
          { "time": "10:50-11:10", "description": "Qingcang Shui（高能所）：Exploring Quasi-Periodic Oscillations in Black Hole X-ray Binaries: Applications of the Hilbert-Huang Transform Method and New Findings" },
          { "time": "11:10-11:30", "description": "纪涛（香港大学）：Modelling Energetic Output From MAD Super-Eddington Accreting Supermassive Black Holes" },
          { "time": "11:30-11:50", "description": "蒋宏轩（上海交大）：3D GRMHD Simulations of Tilted Disks: Magnetically Driven Retrograde Precession" },
          { "time": "11:50-12:10", "description": "邓剑桥（香港中文大学）：Behaviour of Self-interacting Ultralight Bosonic Dark Matter in the Vicinity of a Black Hole" }
        ]
      }
    ]
  },
  {
    "date": "12月7日 下午 主题2: 高能天体物理",
    "events": [
      {
        "time": "14:00-17:20",
        "location": "科维理所报告厅",
        "sessions": [
          { "time": "14:00-15:00", "description": "中国科学技术大学戴子高教授（特邀报告）：The origin, radiation and application of Fast Radio Bursts" },
          { "time": "15:00-15:20", "description": "曹顺顺（北大）：B0943+10: Mode Switching Polar Cap Geometry, and Orthogonally Polarized Radiation" },
          { "time": "15:20-15:50", "description": "茶歇" },
          { "time": "15:50-16:50", "description": "清华大学李菂教授（特邀报告）：Eying the Blinking Universe: Galileo to Cosmic Antennae" },
          { "time": "16:50-17:10", "description": "赵仕乾（广州大学）：Search for fast radio bursts from magnetars to reveal their possible physical origin" },
          { "time": "17:10-17:20", "description": "Poster Intro: Guan Ruoyu（华中科大）：Interpreting time-integrated polarization data of gamma-ray burst prompt emission; Wan-Peng Sun（东北大学）：Explore the Key Features of Repeating FRB with Machine Learning" }
        ]
      }
    ]
  },
  {
    "date": "12月8日 上午 主题3: 银河系与恒星",
    "events": [
      {
        "time": "9:00-12:10",
        "location": "科维理所报告厅",
        "sessions": [
          { "time": "9:00-10:00", "description": "国家天文台刘超研究员（特邀报告）：Learning from the Milky Way, from the stellar populations to the evolution of the whole galaxy" },
          { "time": "10:00-10:20", "description": "Yanjun Sheng（Australian National University）：Uncovering the parameters of the MW-LMC system through dynamical perturbations in the Milky Way halo" },
          { "time": "10:20-10:50", "description": "茶歇" },
          { "time": "10:50-11:10", "description": "Janet Tang（Australian National University）：Re-constraining Star Cluster Demographics using Bayesian Models" },
          { "time": "11:10-11:30", "description": "李翔宇（国家天文台）：A Catalog of 10000 Very Metal-poor Stars from LAMOST DR10" },
          { "time": "11:30-11:50", "description": "田桂婷（国科大）：Unraveling the origin of the \"Snail Shell\" structure" },
          { "time": "11:50-12:10", "description": "孙胜蓝（北大）：The Galactic all-sky halo substructures traced by the 5D kinematics of Gaia DR3 RR Lyrae stars" }
        ]
      }
    ]
  },
  {
    "date": "12月8日 下午 主题3: 银河系与恒星",
    "events": [
      {
        "time": "14:00-17:00",
        "location": "科维理所报告厅",
        "sessions": [
          { "time": "14:00-15:00", "description": "云南天文台韩占文院士（特邀报告）：Theory and Observations of Binary Stars" },
          { "time": "15:00-15:20", "description": "谢熠（Australian National University）：Carbon and Nitrogen Abundances for GALAH Giants: Identifying Red Clump Stars via The Cannon" },
          { "time": "15:20-15:50", "description": "茶歇" },
          { "time": "15:50-16:10", "description": "Haoyang YUAN（香港大学）：Exploring the Interplay of X-ray Emission and Chemical Abundances in Planetary Nebulae" },
          { "time": "16:10-16:30", "description": "张及晨（香港中文大学）：Observing Strategy for AMASE Project" },
          { "time": "16:30-16:50", "description": "马铭阳（北师大）：Digitization of Astronomical Photographic Plate of China: Photometric Calibration of Single-exposure Plates and Release of Photometric Catalogs" },
          { "time": "16:50-17:00", "description": "Poster Intro: 季辰阳（清华大学）：The impact of fiber cross contamination on radial velocity precision; 华心言（清华大学）：The Metallicity-Inclination Relation: Higher Metallicity, Higher Mutual Inclination" }
        ]
      }
    ]
  },
  {
    "date": "12月9日 上午 主题4: 行星",
    "events": [
      {
        "time": "9:00-12:20",
        "location": "科维理所报告厅",
        "sessions": [
          { "time": "9:00-10:00", "description": "北京大学董若冰教授（特邀报告）：Observational Planet Formation" },
          { "time": "10:00-10:20", "description": "李雪（国家天文台）：Ultraviolet Photometry and Habitable Zones of Over 2700 Planet-Hosting Stars" },
          { "time": "10:20-10:40", "description": "陈侃（University College London）：Mind the kinematics simulation of planet-disk interactions: time evolution and numerical resolution" },
          { "time": "10:40-11:00", "description": "茶歇" },
          { "time": "11:00-11:20", "description": "马潇依（北京大学）：A Multi-Wavelength Test of the Vortex Hypothesis in the HD 34282 Protoplanetary Disk" },
          { "time": "11:20-11:40", "description": "唐佳欣（清华大学）：RVxTESS I: Modeling Asteroseismic Signals with Simultaneous Photometry and RVs" },
          { "time": "11:40-12:00", "description": "Yiqi Wu（Leiden University）：Constraining kinematically detected planets through gas distribution" },
          { "time": "12:00-12:20", "description": "詹睿知（北京大学，线上）：Novel Atmospheric Dynamics Shape Inner Edge of Habitable Zone Around White Dwarfs" }
        ]
      }
    ]
  },
  {
    "date": "12月9日 下午 主题5：太阳与射电天文",
    "events": [
      {
        "time": "14:00-17:10",
        "location": "科维理所报告厅",
        "sessions": [
          { "time": "14:00-15:00", "description": "国家天文台汪景琇院士（特邀报告）：太阳磁场和太阳活动" },
          { "time": "15:00-15:10", "description": "高宇航（北京大学）：Modeling and observation of propagating kink waves in solar coronal plumes" },
          { "time": "15:10-15:30", "description": "茶歇" },
          { "time": "15:30-16:30", "description": "紫金山天文台史生才院士（特邀报告）：Submm/Terahertz Astronomy with Superconducting Detectors" },
          { "time": "16:30-16:50", "description": "刘蓉（国家天文台）：The SiO emission in an infrared dark cloud" },
          { "time": "16:50-17:10", "description": "陈瑶（广州大学）：A DM-free scheme for fast radio burst search in multibeam data based on EfficientNet" }
        ]
      }
    ]
  },
  {
    "date": "12月9日 晚上",
    "events": [
      {
        "time": "19:00-21:30",
        "location": "北京大学百周年纪念讲堂李莹厅",
        "sessions": [
          { "time": "19:00-21:30", "description": "“夜空中最亮的星”天问科普论坛（主旨报告人：韩占文院士、赵刚院士、王凯翔博士）" }
        ]
      }
    ]
  },
  {
    "date": "12月10日",
    "events": [
      {
        "time": "全天",
        "location": "离会",
        "sessions": []
      }
    ]
  }

        // 继续添加其他日程数据
      ] as Day[]
    };
  },
  computed: {
    content(): string[] {
      return this.$i18n.messages[this.$i18n.locale].schedule.content;
    }
  }
});
</script>

<style scoped>
.schedule-page {
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

.schedule-container {
  margin-top: 2rem;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

.day-section {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #ffffff;
}

.day-title {
  color: #333;
  margin-bottom: 10px;
  font-size: 1.25em;
  font-weight: bold;
}

.event h3 {
  font-size: 1.1em;
  margin-bottom: 5px;
  color: #444;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

.session-item {
  padding: 5px 0;
  border-bottom: 1px solid #ddd;
}

.session-item strong {
  color: #555;
}
</style>
