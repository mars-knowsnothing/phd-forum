// src/i18n/index.js
import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    tabs: {
      home: 'Home',
      contact: 'Contact Information',
      fees: 'Participation Fees',
      venue: 'Venue',
      schedule: 'Forum Schedule',
      registration: 'Registration',
    },
    home: {
      title: 'Notice of the 2024 Peking University International PhD Student Forum on Frontiers of Modern Astronomy',
      content: [
        'As one of Peking University’s "Discipline Quality Year" activities, Peking University cordially invites graduate students in astronomy and astrophysics to participate in the 2024 Peking University International PhD Student Forum on Frontiers of Modern Astronomy, to be held from December 5th to 10th, 2024, at the Kavli Institute for Astronomy and Astrophysics (KIAA-PKU) at Peking University.',
        'In recent years, astronomy in China has developed rapidly, with numerous advanced ground-based and space facilities in radio astronomy (FAST, TianMa, QTT), optical astronomy (LAMOST, WFST, CSST), and high-energy astrophysics (DAMPE, HXMT, LHAASO, EP, SVOM) either completed or under construction. This forum will cover topics such as radio astronomy, solar and planetary science, stars and the Galaxy, high-energy astrophysics, galaxies and cosmology, focusing on the latest scientific progress achieved by these facilities, and discussing how to effectively engage in related scientific research. The forum will also provide students with opportunities to present and exchange their research findings.',
        'Peking University welcomes graduate students from home and abroad to participate in this forum. All lectures and discussions will be conducted in English. Organized by the Department of Astronomy and the Kavli Institute for Astronomy and Astrophysics at Peking University, this forum aims to promote academic exchanges among astronomy graduate students from different countries and regions and to cultivate students to conduct frontier scientific research in astronomy and astrophysics.',
      ],
      bannerText: 'PhD Forum',
    },
    registration: {
      title: 'Registration Method',
      content: [
        'Registration for the 2024 Peking University International PhD Student Forum on Frontiers of Modern Astronomy will be open from September 15th to October 20th, 2024, or until the quota is filled. The forum is limited to 100 students. Participants should indicate whether they wish to give an oral presentation or a poster presentation. Those accepted for oral presentations will be notified by November 1st, 2024.',
        'Forum Homepage: http://XXXX',
        'Forum Venue: Lecture Hall, Kavli Institute for Astronomy and Astrophysics, Peking University',
        'Forum Dates: December 5th to December 10th, 2024',
        'Registration Period: September 15th to October 20th, 2024',
        'Registration Website: http://XXXX',
        'Registration QR Code:',
      ],
    },
    contact: {
      title: 'Contact Information',
      content: [
        'All information about the forum, including visa application support, can be found on the website (http://XXXXX). If you have any questions, please contact:',
        // 将联系人信息作为数组
        [
          'Teacher Sun Min  Email: minsun1206@pku.edu.cn',
          'Teacher Xie Jing  Email: xiejing5166@pku.edu.cn',
        ],
        'We look forward to seeing you at the 2024 Peking University International PhD Student Forum on Frontiers of Modern Astronomy!',
      ],
    },
    fees: {
      title: '参会费用说明',
      content: [
        '本次论坛不收取注册费。交通和住宿费用自理（如确有需求，注册时请提出，本论坛将为来自发展中国家或地区的海外参与者提供有限的住宿安排）。论坛将为所有参会者提供每日午餐和晚餐。',
      ],
    },
    venue: {
      title: 'Venue Information',
      content_1: 'This forum will take place at the Kavli Institute for Astronomy and Astrophysics at Peking University (KIAA-PKU). To get further information, please pay attention to follow-up notifications. A PKU campus map showing the location of KIAA can be accessed here:',
      content_2:  'A PKU campus map showing the location of KIAA can be accessed here:',
      content_3: 'A map showing the location of PKU is here:',
      link_2:  'http://kavli.pku.edu.cn/visitor-info/maps',
      link_3:  'http://kavli.pku.edu.cn/sites/default/files/Visit_Info/images/pku_map_direction.pdf',
    },
    // ... 其他翻译内容
  },
  zh: {
    tabs: {
      home: '首页',
      contact: '联系方式',
      fees: '参会费用',
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
      ],
      section_1_title: '1.参与对象',
      section_1_content: [
        '欢迎各国和各地区的天文学专业研究生参加。鼓励所有学生在学习报告内容的同时展示自己的研究成果。（目前，中国对包括亚美尼亚、澳大利亚、奥地利、比利时、法国、格鲁吉亚、德国、匈牙利、爱尔兰、意大利、马来西亚、荷兰、新西兰、波兰、塞尔维亚、新加坡、西班牙、瑞士、泰国、阿联酋等许多国家的公民实行限时免签政策）'
      ],
      section_2_title: '2.论坛日程',
      section_2_content: [
        '论坛涵盖五个主题：射电天文学、太阳与行星、恒星与银河系、高能天体物理学、星系与宇宙学。每个主题都将包括该领域顶尖专家的特邀讲座，已确认的嘉宾有：汪景琇（太阳与行星）、何子山（星系与宇宙学）、XX（恒星与银河系）、曹臻（高能天体物理）、XX（射电天文学）。这些讲座之后将安排研究生的口头报告和海报展示。'
      ],
      section_3_title: '3.注册方式',
      section_3_content: [
        '2024 年北京大学现代天文学前沿国际博士生论坛的注册将从9月15日开放至 10 月 20 日或报名名额招满为止，限额 100 名学生。参与者应注明他们是否希望进行口头报告或海报展示。被接受口头报告的同学将于 2024 年 11 月 1 日前收到通知。',
        '论坛主页：http://XXXX',
        '论坛地点：北京大学科维理天文与天体物理研究所报告厅',
        '论坛日期：2024 年 12 月 5 日至 12 月 10 日',
        '注册时间：2024 年 9 月 15 日至 2024 年 10 月 20 日',
        '注册网站：http://XXXX',
        '注册二维码：'
      ],
      section_4_title: '4.参会费用',
      section_4_content: [
        '本次论坛不收取注册费。交通和住宿费用自理（如确有需求，注册时请提出，本论坛将为来自发展中国家或地区的海外参与者提供有限的住宿安排）。论坛将为所有参会者提供每日午餐和晚餐。'
      ],
      section_5_title: '5.联系方式',
      section_5_content: [
        '有关论坛的所有信息，包括签证申请支持，均可在网站（http://XXXXX）上找到。如有任何问题，请联系：',
        '孙敏老师  电子邮箱：minsun1206@pku.edu.cn',
        '谢静老师  电子邮箱：xiejing5166@pku.edu.cn'
      ],
      bannerText: '博士生论坛',
    },
    schedule: {
      title: '论坛日程',
      content: []
    },
    registration: {
      title: '注册方式',
      content: [
        '2024 年北京大学现代天文学前沿国际博士生论坛的注册将从 9 月 15 日开放至 10 月 20 日或报名名额招满为止，限额 100 名学生。参与者应注明他们是否希望进行口头报告或海报展示。被接受口头报告的同学将于 2024 年 11 月 1 日前收到通知。',
        '论坛主页：http://XXXX',
        '论坛地点：北京大学科维理天文与天体物理研究所报告厅',
        '论坛日期：2024 年 12 月 5 日至 12 月 10 日',
        '注册时间：2024 年 9 月 15 日至 2024 年 10 月 20 日',
        '注册网站：http://XXXX',
        '注册二维码：',
      ],
    },
    fees: {
      title: '参会费用说明',
      content: [
        '本次论坛不收取注册费。交通和住宿费用自理（如确有需求，注册时请提出，本论坛将为来自发展中国家或地区的海外参与者提供有限的住宿安排）。论坛将为所有参会者提供每日午餐和晚餐。',
      ],
    },
    contact: {
      title: '联系方式',
      content: [
        '有关论坛的所有信息，包括签证申请支持，均可在网站(http://localhost:5173/contact)上找到。如有任何问题，请联系：',
        // 将联系人信息作为数组
        [
          '孙敏老师  电子邮箱：minsun1206@pku.edu.cn',
          '谢静老师  电子邮箱：xiejing5166@pku.edu.cn',
        ],
        '我们期待在 2024 年北京大学现代天文学前沿国际博士生论坛与你相见！',
      ],
    },
    venue: {
      title: '会场信息',
      content_1: '本次活动将在北京大学科维理天文与天体物理研究所（KIAA-PKU）和腾讯会议线上同步举行。获取更多信息，请关注后续通知。北京大学校园地图（标注了 KIAA 的位置）可在此获取：',
      content_2: '北京大学校园地图（标注了 KIAA 的位置）可在此获取：',
      content_3: '北京大学位置地图在此：',
      link_2:  'http://kavli.pku.edu.cn/visitor-info/maps',
      link_3:  'http://kavli.pku.edu.cn/sites/default/files/Visit_Info/images/pku_map_direction.pdf',
    },
    // ... 其他翻译内容
  },
};

const i18n = createI18n({
  locale: 'zh', // 默认语言，可改为 'en'
  fallbackLocale: 'en',
  messages,
});

export default i18n;
