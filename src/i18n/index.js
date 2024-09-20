// src/i18n/index.js
import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    toggleLanguage:'切换到中文版',
    tabs: {
      home: 'Home',
      contact: 'Contact Information',
      // fees: 'Participation Fees',
      venue: 'Venue',
      schedule: 'Forum Schedule',
      registration: 'Registration',
    },
    home: {
      title: 'Announcement of 2024 PKU International PhD Student Forum on the Frontiers of Modern Astronomy',
      content: [
        'Peking University invites graduate students in astronomy and astrophysics to participate in the 2024 PKU International Forum on the Frontiers of Modern Astronomy, to be held at the Kavli Institute for Astronomy and Astrophysics at Peking University (KIAA-PKU) from December 5-10, 2024. ',
        'Astronomy in China has rapidly developed, with the cutting-edge ground and space-based facilities having been built or under development in radio (FAST, TianMa, QTT) and optical wavelengths (LAMOST, WFST, CSST) and in high-energy astrophysics (DAMPE, HXMT, LHAASO, EP, SVOM).  The Forum will cover Radio Astronomy, the Sun and Planets, Stars and the Milky Way, High Energy Astrophysics, and Galaxies and Cosmology, with an emphasis on recent scientific advances from these facilities and discussions of how to get involved.  The Forum will also offer students with an opportunity to present and discuss their own research.',
        'PKU welcomes all domestic and international students to attend this forum.  All lectures and discussions will be in English.  This forum is organized by the Department of Astronomy (DoA) and the Kavli Institute for Astronomy and Astrophysics at Peking University, with the goal of promoting academic exchange among graduate students from different countries/regions and training students to do frontier research in astronomy and astrophysics.',
        'Graduate students in astronomy from all countries/regions are welcome to attend.  All students are encouraged to present their own research works besides learning from the lectures.',
        'China now offers visa-free travels, with time limits, for citizens of many countries, including Armenia, Australia, Austria, Belgium, France, Georgia, Germany, Hungary, Ireland, Italy, Malaysia, Netherlands, New Zealand, Poland, Serbia, Singapore, Spain, Switzerland, Thailand, UAE, plus many others.'
      ],
      bannerText: [
        '2024 PKU International PhD Student Forum',
        'on the Frontiers of Modern Astronomy'
      ],
    },
    registration: {
      title: 'Registration',
      content: [
        'Registration for the 2024 PKU International Forum on the Frontiers of Astrophysics will remain open until October 20 or the slots are filled, with a limit of 100 students.  Participants should indicate whether they would like to present a talk or a poster.  Speakers will be notified by November 1, 2024.',
        'There is no registration fee for this forum. Transportation and accommodation costs are at your own expense (limited support for accommodation will be provided to the oversea participants from developing countries/regions upon requests). The Forum will provide the daily lunch and dinner to all participants.',
        ['Forum Homepage:', 'https://phd-forum-2024.kiaa-pku.cn/'],
        'Forum Venue: KIAA-PKU Auditorium',
        'Forum Dates: December 5th to December 10th, 2024',
        'Registration Period: September 20th to October 20th, 2024',
        ['Registration Website:','https://www.wjx.cn/vm/PWcW4Z4.aspx#'],
        'Registration QR Code:',
      ],
    },
    contact: {
      title: 'Contact Information',
      content: [
        'All information regarding the forum can be found on the website:',
        ['https://phd-forum-2024.kiaa-pku.cn/'],
        'If you have any questions, or need visa applications support, please contact: ',
        // 将联系人信息作为数组
        [
          'Ms. Sun Min, Email: minsun1206@pku.edu.cn',
          'Ms. Xie Jing, Email: xiejing5166@pku.edu.cn',
        ],
        'We are looking forward to meeting you at 2024 PKU International PhD Student Forum on the Frontiers of Modern Astronomy!',
      ],
    },
    fees: {
      title: 'Participation Fee',
      content: [],
    },
    venue: {
      title: 'Venue Information',
      content_1: 'This forum will take place at the Kavli Institute for Astronomy and Astrophysics at Peking University (KIAA-PKU). To get further information, please pay attention to follow-up notifications. A PKU campus map showing the location of KIAA can be accessed here:',
      content_2:  'A PKU campus map showing the location of KIAA can be accessed here:',
      content_3: 'A map showing the location of PKU is here:',
      link_2:  'http://kavli.pku.edu.cn/visitor-info/maps',
      link_3:  'http://kavli.pku.edu.cn/sites/default/files/Visit_Info/images/pku_map_direction.pdf',
    },
    schedule: {
      title: 'Forum Schedule',
      content: [
        'The Forum covers five topics: Radio Astronomy, Sun and Planets, Stars and Milky Way, High Energy Astrophysics, and Galaxies and Cosmology.',
        'Each topic will include lectures from leading experts in the field.  Confirmed speakers include Jingxiu Wang (Sun), Zhanwen Han (stars), Zhen Cao and Zigao Dai (high energy astrophysics), Shengcai Shi and Di Li (radio astronomy), Yipeng Jing and Luis Ho (galaxies and cosmology), Ruobing Dong (planets), Chao Liu (the Milky Way). These lectures will be followed by oral presentations and posters of graduate students.'
      ],
      subTitle: 'Preliminary Schedule:',
      schedule: [
        'December 4: Arrival',
        'December 5: Galaxies and Cosmology;',
        'December 6: High Energy Astrophysics;',
        'December 7: Radio astronomy;',
        'December 8: Stars and the Milky Way;',
        'December 9: the Sun and Planets.',
        'December 10: Departure'
      ]
    }
    // ... 其他翻译内容
  },
  zh: {
    toggleLanguage:'Switch to English Version',
    tabs: {
      home: '首页',
      contact: '联系方式',
      // fees: '参会费用',
      venue: '会场',
      schedule: '论坛日程',
      registration: '注册方式',
    },
    home: {
      title: '2024 年北京大学现代天文学前沿国际博士生论坛通知',

      content: [
        '作为北京大学“学科质量年”活动之一，北京大学诚邀天文学和天体物理学专业的研究生参加将于2024年12月5日至10日在北京大学科维理天文与天体物理研究所（KIAA-PKU）举办的2024年北京大学现代天文学前沿国际博士生论坛。',
        '近年来，中国天文学发展迅速，在射电（FAST、TianMa、QTT）和光学（LAMOST、WFST、CSST）以及高能天体物理（DAMPE、HXMT、LHAASO、EP、SVOM）等领域的大批先进的地面和空间设施已经建成或正在建设中。本次论坛将涵盖射电天文学、太阳与行星、恒星与银河系、高能天体物理、星系与宇宙学等主题，重点关注相关设施取得的最新科学进展，并讨论如何有效参与其中的科学研究。论坛还将为学生提供展示和交流自己研究成果的机会。',
        '北京大学欢迎国内外的研究生参加本次论坛。所有讲座和讨论都将使用英语。本论坛由北京大学物理学院天文学系和科维理天文与天体物理研究所组织，旨在促进不同国家和地区天文学科研究生之间的学术交流，培养学生开展天文学和天体物理学前沿科学研究。',
        '欢迎各国和各地区的天文学专业研究生参加。鼓励所有学生在学习报告内容的同时展示自己的研究成果。'
      ],
      section_1_title: '1.参与对象',
      section_1_content: [
        '欢迎各国和各地区的天文学专业研究生参加。鼓励所有学生在学习报告内容的同时展示自己的研究成果。'
      ],
      section_2_title: '2.论坛日程',
      section_2_content: [
        '论坛涵盖五个主题：射电天文学、太阳与行星、恒星与银河系、高能天体物理学、星系与宇宙学。每个主题都将包括该领域顶尖专家的特邀讲座，已确认的嘉宾有：汪景琇（太阳与行星）、何子山（星系与宇宙学）、XX（恒星与银河系）、曹臻（高能天体物理）、XX（射电天文学）。这些讲座之后将安排研究生的口头报告和海报展示。'
      ],
      section_3_title: '3.注册方式',
      section_3_content: [
        '2024 年北京大学现代天文学前沿国际博士生论坛的注册将从9月20日开放至 10 月 20 日或报名名额招满为止，限额 100 名学生。参与者应注明他们是否希望进行口头报告或海报展示。被接受口头报告的同学将于 2024 年 11 月 1 日前收到通知。',
        ['论坛主页：','https://phd-forum-2024.kiaa-pku.cn/'],
        '论坛地点：北京大学科维理天文与天体物理研究所报告厅',
        '论坛日期：2024 年 12 月 5 日至 12 月 10 日',
        '注册时间：2024 年 9 月 20 日至 2024 年 10 月 20 日',
        ['注册网站：','https://www.wjx.cn/vm/PWcW4Z4.aspx#'],
        '注册二维码：'
      ],
      section_4_title: '4.参会费用',
      section_4_content: [
        '本次论坛不收取注册费。交通和住宿费用自理（如确有需求，注册时请提出，本论坛将为来自发展中国家或地区的海外参与者提供有限的住宿安排）。论坛将为所有参会者提供每日午餐和晚餐。'
      ],
      section_5_title: '5.联系方式',
      section_5_content: [
        '有关论坛的所有信息，包括签证申请支持，均可在网站（https://phd-forum-2024.kiaa-pku.cn/X）上找到。如有任何问题，请联系：',
        '孙敏老师  电子邮箱：minsun1206@pku.edu.cn',
        '谢静老师  电子邮箱：xiejing5166@pku.edu.cn'
      ],
      bannerText: ['2024 年北京大学现代天文学前沿国际博士生论坛'],
    },
    schedule: {
      title: '论坛日程',
      content: [
        '论坛涵盖五个主题：射电天文学、太阳与行星、恒星与银河系、高能天体物理学、星系与宇宙学。每个主题都将包括该领域顶尖专家的特邀讲座，已确认的嘉宾有：汪景琇院士（太阳），韩占文院士（恒星），曹臻院士、戴子高教授（高能），史生才院士、李菂教授（射电），景益鹏院士、Luis Ho 院士（星系宇宙学），董若冰教授（行星），刘超研究员（银河系）。这些讲座之后将安排研究生的口头报告和海报展示。',
      ],
      subTitle: '初步日程',
      schedule: [
        '12月4日  报到；',
        '12月5日  星系与宇宙学；',
        '12月6日  高能天体物理；',
        '12月7日  射电天文；',
        '12月8日  恒星与银河系；',
        '12月9日  太阳与行星'
      ]
    },
    registration: {
      title: '注册方式',
      content: [
        '2024 年北京大学现代天文学前沿国际博士生论坛的注册将从 9 月 20 日开放至 10 月 20 日或报名名额招满为止，限额 100 名学生。参与者应注明他们是否希望进行口头报告或海报展示。被接受口头报告的同学将于 2024 年 11 月 1 日前收到通知。',
        '本次论坛不收取注册费。交通和住宿费用自理（如确有需求，注册时请提出，本论坛将为来自发展中国家或地区的海外参与者提供有限的住宿安排）。论坛将为所有参会者提供每日午餐和晚餐。',
        ['论坛主页：','https://phd-forum-2024.kiaa-pku.cn/'],
        '论坛地点：北京大学科维理天文与天体物理研究所报告厅',
        '论坛日期：2024 年 12 月 5 日至 12 月 10 日',
        '注册时间：2024 年 9 月 20 日至 2024 年 10 月 20 日',
        ['注册网站：','https://www.wjx.cn/vm/PWcW4Z4.aspx#'],
        '注册二维码：',
      ],
    },
    fees: {
      title: '参会费用说明',
      content: [],
    },
    contact: {
      title: '联系方式',
      content: [
        '有关论坛的所有信息均可在网站上找到：',
        ["https://phd-forum-2024.kiaa-pku.cn/"],
        '如有任何问题，或需要签证申请支持，请联系：',
        // 将联系人信息作为数组
        [
          '孙敏老师, 电子邮箱：minsun1206@pku.edu.cn',
          '谢静老师, 电子邮箱：xiejing5166@pku.edu.cn',
        ],
        '我们期待在 2024 年北京大学现代天文学前沿国际博士生论坛与你相见！',
      ],
    },
    venue: {
      title: '会场信息',
      content_1: '本次活动将在北京大学科维理天文与天体物理研究所（KIAA-PKU）举行。获取更多信息，请关注后续通知。北京大学校园地图（标注了 KIAA 的位置）可在此获取：',
      content_2: '北京大学校园地图（标注了 KIAA 的位置）可在此获取：',
      content_3: '北京大学位置地图在此：',
      link_2:  'http://kavli.pku.edu.cn/visitor-info/maps',
      link_3:  'http://kavli.pku.edu.cn/sites/default/files/Visit_Info/images/pku_map_direction.pdf',
    },
    // ... 其他翻译内容
  },
};

const i18n = createI18n({
  locale: 'en', // 默认语言，可改为 'en'
  fallbackLocale: 'zh',
  messages,
});

export default i18n;
