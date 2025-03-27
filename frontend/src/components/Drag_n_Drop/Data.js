import Chip from "@material-ui/core/Chip";
import React from "react";

const Elem_list = [
    {
        id: 0,
        element_name: "6xHis",
        element_sequence: "HHHHHH",
        element_system: "All",
        element_color: "#9be8fa",
        element_type: "Affinity Tag"
    },
    {
        id: 1,
        element_name: "8xHis",
        element_sequence: "HHHHHHHH",
        element_system: "All",
        element_color: "#9be8fa",
        element_type: "Affinity Tag"
    },
    {
        id: 2,
        element_name: "10xHis",
        element_sequence: "HHHHHHHHHH",
        element_system: "All",
        element_color: "#9be8fa",
        element_type: "Affinity Tag"
    },
    {
        id: 3,
        element_name: "AviTag",
        element_sequence: "GLNDIFEAQKIEWHE",
        element_system: "All",
        element_color: "#bb72f2",
        element_type: "Affinity Tag"
    },
    {
        id: 4,
        element_name: "FLAG",
        element_sequence: "DYKDDDDK",
        element_system: "All",
        element_color: "#d92727",
        element_type: "Affinity Tag"
    },
    {
        id: 5,
        element_name: "StrepII",
        element_sequence: "WSHPQFEK",
        element_system: "All",
        element_color: "#f56f22",
        element_type: "Affinity Tag"
    },
    {
        id: 6,
        element_name: "PreScission Site",
        element_sequence: "LEVLFQGP",
        element_system: "All",
        element_color: "#817da1",
        element_type: "Protease Site"
    },
    {
        id: 7,
        element_name: "Enterokinase Site",
        element_sequence: "DDDDK",
        element_system: "All",
        element_color: "#a67676",
        element_type: "Protease Site"
    },
    {
        id: 8,
        element_name: "TEV (G) Site",
        element_sequence: "ENLYFQG",
        element_system: "All",
        element_color: "#799c75",
        element_type: "Protease Site"
    },
    {
        id: 9,
        element_name: "TEV (S) Site",
        element_sequence: "ENLYFQS",
        element_system: "All",
        element_color: "#5a7357",
        element_type: "Protease Site"
    },
    {
        id: 10,
        element_name: "Thrombin Site",
        element_sequence: "LVPRGS",
        element_system: "All",
        element_color: "#ab5755",
        element_type: "Protease Site"
    },
    {
        id: 11,
        element_name: "GST",
        element_sequence: "MSPILGYWKIKGLVQPTRLLLEYLEEKYEEHLYERDEGDKWRNKKFELGLEFPNLPYYIDGDVKLTQSMAIIRYIADKHNMLGGCPKERAEISMLEGAVLDIRYGVSRIAYSKDFETLKVDFLSKLPEMLKMFEDRLCHKTYLNGDHVTHPDFMLYDALDVVLYMDPMCLDAFPKLVCFKKRIEAIPQIDKYLKSSKYIAWPLQGWQATFGGGDHPPK",
        element_system: "All",
        element_color: "#fcf3de",
        element_type: "Fusion Protein"
    },
    {
        id: 12,
        element_name: "MBP",
        element_sequence: "MKIEEGKLVIWINGDKGYNGLAEVGKKFEKDTGIKVTVEHPDKLEEKFPQVAATGDGPDIIFWAHDRFGGYAQSGLLAEITPDKAFQDKLYPFTWDAVRYNGKLIAYPIAVEALSLIYNKDLLPNPPKTWEEIPALDKELKAKGKSALMFNLQEPYFTWPLIAADGGYAFKYENGKYDIKDVGVDNAGAKAGLTFLVDLIKNKHMNADTDYSIAEAAFNKGETAMTINGPWAWSNIDTSKVNYGVTVLPTFKGQPSKPFVGVLSAGINAASPNKELAKEFLENYLLTDEGLEAVNKDKPLGAVALKSYEEELAKDPRIAATMENAQKGEIMPNIPQMSAFWYAVRTAVINAASGRQTVDEALKDAQTRITK",
        element_system: "All",
        element_color: "#fcf3de",
        element_type: "Fusion Protein"
    },
    {
        id: 13,
        element_name: "SUMO(cleavable)",
        element_sequence: "MSDSEVNQEAKPEVKPEVKPETHINLKVSDGSSEIFFKIKKTTPLRRLMEAFAKRQGKEMDSLRFLYDGIRIQADQTPEDLDMEDNDIIEAHREQIGG",
        element_system: "All",
        element_color: "#fcf3de",
        element_type: "Fusion Protein"
    },
    {
        id: 14,
        element_name: "SUMO(noncleavable)",
        element_sequence: "MSDSEVNQEAKPEVKPEVKPETHINLKVSDGSSEIFFKIKKTTPLRRLMEAFAKRQGKEMDSLRFLYDGIRIQADQTPEDLDMEDNDIIEAHREQIAA",
        element_system: "All",
        element_color: "#fcf3de",
        element_type: "Fusion Protein"
    },
    {
        id: 15,
        element_name: "Thioredoxin",
        element_sequence: "MSDKIIHLTDDSFDTDVLKADGAILVDFWAEWCGPCKMIAPILDEIADEYQGKLTVAKLNIDQNPGTAPKYGIRGIPTLLLFKNGEVAATKVGALSKGQLKEFLDANLA",
        element_system: "All",
        element_color: "#fcf3de",
        element_type: "Fusion Protein"
    },
    {
        id: 16,
        element_name: "DsbC S.S.",
        element_sequence: "MKKGFMLFTLLAAFSGFAQA  ",
        element_system: "Bacterial",
        element_color: "#dbba6e",
        element_type: "Signal Sequence"
    },
    {
        id: 17,
        element_name: "MBP S.S.",
        element_sequence: "MKIKTGARILALSALTTMMFSASALA",
        element_system: "Bacterial",
        element_color: "#dbba6e",
        element_type: "Signal Sequence"
    },
    {
        id: 18,
        element_name: "OmpA S.S.",
        element_sequence: "MKKTAIAIAVALAGFATVAQA",
        element_system: "Bacterial",
        element_color: "#dbba6e",
        element_type: "Signal Sequence"
    },
    {
        id: 19,
        element_name: "PelB S.S.",
        element_sequence: "MKYLLPTAAAGLLLLAAQPAMA",
        element_system: "Bacterial",
        element_color: "#dbba6e",
        element_type: "Signal Sequence"
    },
    {
        id: 20,
        element_name: "PhoA S.S.",
        element_sequence: "MKQSTIALALLPLLFTPVTKA",
        element_system: "Bacterial",
        element_color: "#dbba6e",
        element_type: "Signal Sequence"
    },
    {
        id: 21,
        element_name: "HC Leader 1 S.S.",
        element_sequence: "MEFGLSWLFLVAILKGVQC",
        element_system: "Mammalian",
        element_color: "#f2a98d",
        element_type: "Signal Sequence"
    },
    {
        id: 22,
        element_name: "Mouse Ig Kappa S.S.",
        element_sequence: "METDTLLLWVLLLWVPGSTGD",
        element_system: "Mammalian",
        element_color: "#f2a98d",
        element_type: "Signal Sequence"
    },
    {
        id: 23,
        element_name: "BiP S.S.",
        element_sequence: "MKLSLVAAMLLLLSAARA",
        element_system: "Mammalian",
        element_color: "#f2a98d",
        element_type: "Signal Sequence"
    },
    {
        id: 24,
        element_name: "GP67 S.S.",
        element_sequence: "MLLVNQSHQGFNKEHTSKMVSAIVLYVLLAAAAHSAFA",
        element_system: "Insect",
        element_color: "#fcfa62",
        element_type: "Signal Sequence"
    },
    {
        id: 25,
        element_name: "Honey Bee Melittin S.S.",
        element_sequence: "MKFLVNVALVFMVVYISYIYA",
        element_system: "Insect",
        element_color: "#fcfa62",
        element_type: "Signal Sequence"
    },
];

var vector_list = [
    {
        vector_name:"pcDNA3.1(+)",
        vector_system:"Mammalian",
        mcs1:["Nhe I", "Afl II", "Hind III", "Kpn I", "BamH I", "EcoR I", "EcoR V", "Not I", "Xho I", "Xba I", "Apa I"],
        mcs1_defaults:["Nhe I", "Xho I"],
        mcs2:null,
        mcs2_defaults:null
    },
    {
        vector_name:"pcDNA3.1(-)",
        vector_system:"Mammalian",
        mcs1:["Nhe I", "Apa I", "Xba I", "Xho I", "Not I", "EcoR V", "EcoR I", "BamH I", "Kpn I", "Hind III", "Afl II"],
        mcs1_defaults:["Nhe I", "Hind III"],
        mcs2:null,
        mcs2_defaults:null
    },
    {
        vector_name:"pcDNA3.1(+)_myc-His A",
        vector_system:"Mammalian",
        mcs1:["Hind III", "Kpn I", "BamH I", "EcoR I", "EcoR V", "Not I", "Xho I", "Xba I", "Apa I"],
        mcs1_defaults:["Hind III", "Apa I"],
        mcs2:null,
        mcs2_defaults:null
    },
    {
        vector_name:"pcDNA3.1(+)_myc-His B",
        vector_system:"Mammalian",
        mcs1:["Hind III", "Kpn I", "BamH I", "EcoR I", "EcoR V", "Not I", "Xho I", "Xba I", "Apa I"],
        mcs1_defaults:["Hind III", "Apa I"],
        mcs2:null,
        mcs2_defaults:null
    },
    {
        vector_name:"pcDNA3.1(+)_myc-His C",
        vector_system:"Mammalian",
        mcs1:["Hind III", "Kpn I", "BamH I", "EcoR I", "EcoR V", "Not I", "Xho I"],
        mcs1_defaults:["Hind III", "Xho I"],
        mcs2:null,
        mcs2_defaults:null
    }, {
        vector_name: "pcDNA3.1(-)_myc-His A",
        vector_system: "Mammalian",
        mcs1: ["Nhe I", "Xba I", "Xho I", "Not I", "EcoR V", "EcoR I", "BamH I", "Kpn I", "Hind III"],
        mcs1_defaults: ["Nhe I", "Hind III"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pcDNA3.1(-)_myc-His B",
        vector_system: "Mammalian",
        mcs1: ["Nhe I", "Apa I", "Xho I", "Not I", "EcoR V", "EcoR I", "BamH I", "Kpn I", "Hind III"],
        mcs1_defaults: ["Nhe I", "Hind III"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pcDNA3.1(-)_myc-His C",
        vector_system: "Mammalian",
        mcs1: ["Nhe I", "Apa I", "Xba I", "Xho I", "Not I", "EcoR V", "EcoR I", "BamH I", "Kpn I", "Hind III"],
        mcs1_defaults: ["Nhe I", "Hind III"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pCI-Neo",
        vector_system: "Mammalian",
        mcs1: ["Nhe I", "Xho I", "EcoR I", "Afl II", "Xba I", "Sal I", "Sma I", "Not I"],
        mcs1_defaults: ["Nhe I", "Not I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pcDNA3.1+C-DYK",
        vector_system: "Mammalian",
        mcs1: ["Nhe I", "Afl II", "Hind III", "Kpn I", "BamH I", "EcoR I", "EcoR V", "Not I", "Xho I", "Xba I", "Apa I"],
        mcs1_defaults: ["Nhe I", "Apa I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pcDNA3.1+C-HA",
        vector_system: "Mammalian",
        mcs1: ["Nhe I", "Afl II", "Hind III", "Kpn I", "BamH I", "EcoR I", "EcoR V", "Not I", "Xho I", "Xba I", "Apa I"],
        mcs1_defaults: ["Nhe I", "Apa I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pcDNA3.1+C-6His",
        vector_system: "Mammalian",
        mcs1: ["Nhe I", "Afl II", "Hind III", "Kpn I", "BamH I", "EcoR I", "EcoR V", "Not I", "Xho I", "Xba I", "Apa I"],
        mcs1_defaults: ["Nhe I", "Apa I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pcDNA3.1+C-Myc",
        vector_system: "Mammalian",
        mcs1: ["Nhe I", "Afl II", "Hind III", "Kpn I", "BamH I", "EcoR I", "EcoR V", "Not I", "Xho I", "Xba I", "Apa I"],
        mcs1_defaults: ["Nhe I", "Apa I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pcDNA3.1+N-DYK",
        vector_system: "Mammalian",
        mcs1: ["Nhe I", "Afl II", "Hind III", "Kpn I", "BamH I", "EcoR I", "EcoR V", "Not I", "Xho I", "Xba I", "Apa I"],
        mcs1_defaults: ["Kpn I", "Apa I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pcDNA3.1+N-HA",
        vector_system: "Mammalian",
        mcs1: ["Nhe I", "Afl II", "Hind III", "Kpn I", "BamH I", "EcoR I", "EcoR V", "Not I", "Xho I", "Xba I", "Apa I"],
        mcs1_defaults: ["Kpn I", "Apa I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pcDNA3.1+N-6His",
        vector_system: "Mammalian",
        mcs1: ["Nhe I", "Afl II", "Hind III", "Kpn I", "BamH I", "EcoR I", "EcoR V", "Not I", "Xho I", "Xba I", "Apa I"],
        mcs1_defaults: ["Kpn I", "Apa I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pcDNA3.1+N-Myc",
        vector_system: "Mammalian",
        mcs1: ["Nhe I", "Afl II", "Hind III", "Kpn I", "BamH I", "EcoR I", "EcoR V", "Not I", "Xho I", "Xba I", "Apa I"],
        mcs1_defaults: ["Kpn I", "Apa I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pcDNA3.1+N-GST(Thrombin)",
        vector_system: "Mammalian",
        mcs1: ["Nhe I", "Afl II", "Hind III", "BamH I", "EcoR I", "EcoR V", "Not I", "Xho I", "Xba I", "Apa I"],
        mcs1_defaults: ["EcoR I", "Apa I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pcDNA3.1+N-GST(TEV)",
        vector_system: "Mammalian",
        mcs1: ["Nhe I", "Afl II", "Hind III", "BamH I", "EcoR I", "EcoR V", "Not I", "Xho I", "Xba I", "Apa I"],
        mcs1_defaults: ["BamH I", "Apa I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pcDNA3.1/Hygro(+)",
        vector_system: "Mammalian",
        mcs1: ["Nhe I", "Afl II", "Hind III", "Kpn I", "BamH I", "EcoR V", "Not I", "Xho I", "Xba I", "Apa I"],
        mcs1_defaults: ["Nhe I", "Apa I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pcDNA3.1/Hygro(-)",
        vector_system: "Mammalian",
        mcs1: ["Nhe I", "Apa I", "Xba I", "Xho I", "Not I", "EcoR V", "BamH I", "Kpn I", "Hind III", "Afl II"],
        mcs1_defaults: ["Nhe I", "Hind III"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pcDNA3.1/Zeo (+)",
        vector_system: "Mammalian",
        mcs1: ["Nhe I", "Afl II", "Hind III", "Kpn I", "BamH I", "EcoR I", "Pst I", "EcoR V", "Not I", "Xho I", "Xba I", "Apa I"],
        mcs1_defaults: ["Nhe I", "Apa I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pcDNA3.1/Zeo (-)",
        vector_system: "Mammalian",
        mcs1: ["Nhe I", "Apa I", "Xba I", "Xho I", "Not I", "EcoR V", "EcoR I", "BamH I", "Kpn I", "Hind III", "Afl II"],
        mcs1_defaults: ["Nhe I", "Hind III"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pCMV-3Tag-1a",
        vector_system: "Mammalian",
        mcs1: ["Sac I", "Not I", "BamH I", "Pst I", "EcoR I", "EcoR V", "Hind III", "Sal I", "Xho I", "Apa I"],
        mcs1_defaults: ["BamH I", "Apa I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pCMV-3Tag-2a",
        vector_system: "Mammalian",
        mcs1: ["Sac I", "Not I", "BamH I", "Pst I", "EcoR I", "EcoR V", "Hind III", "Sal I", "Xho I", "Apa I"],
        mcs1_defaults: ["BamH I", "Apa I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pCMV-3Tag-3a",
        vector_system: "Mammalian",
        mcs1: ["Sac I", "Not I", "BamH I", "Pst I", "EcoR I", "EcoR V", "Hind III", "Sal I", "Xho I", "Apa I"],
        mcs1_defaults: ["Not I", "Xho I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pCMV-3Tag-4a",
        vector_system: "Mammalian",
        mcs1: ["Sac I", "Not I", "BamH I", "Pst I", "EcoR I", "EcoR V", "Hind III", "Sal I", "Xho I", "Apa I"],
        mcs1_defaults: ["Not I", "Xho I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pcDNA3.1+C-eGFP",
        vector_system: "Mammalian",
        mcs1: ["Nhe I", "Afl II", "Hind III", "Kpn I", "BamH I", "EcoR I", "EcoR V", "Not I", "Xba I", "Apa I"],
        mcs1_defaults: ["Nhe I", "Not I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pcDNA3.1+N-eGFP",
        vector_system: "Mammalian",
        mcs1: ["Nhe I", "Afl II", "Hind III", "Kpn I", "BamH I", "EcoR I", "EcoR V", "Not I", "Xho I", "Xba I", "Apa I"],
        mcs1_defaults: ["Kpn I", "Apa I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pcDNA3.1+P2A-eGFP",
        vector_system: "Mammalian",
        mcs1: ["Nhe I", "Afl II", "Hind III", "Kpn I", "BamH I", "EcoR I", "EcoR V", "Not I", "Xho I", "Xba I", "Apa I"],
        mcs1_defaults: ["Nhe I", "Xba I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pcDNA3.1-P2A",
        vector_system: "Mammalian",
        mcs1: ["Nhe I", "Afl II", "Hind III", "Kpn I", "BamH I", "EcoR I", "EcoR V", "Not I", "Xho I", "Xba I", "Apa I"],
        mcs1_defaults: ["Nhe I", "Apa I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pcDNA3.1+N-DYK-P2A",
        vector_system: "Mammalian",
        mcs1: ["Nhe I", "Afl II", "Hind III", "Kpn I", "BamH I", "EcoR I", "EcoR V", "Not I", "Xho I", "Xba I", "Apa I"],
        mcs1_defaults: ["Not I", "Apa I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pcDNA3.1+C-DYK-P2A",
        vector_system: "Mammalian",
        mcs1: ["Nhe I", "Afl II", "Hind III", "Kpn I", "BamH I", "EcoR I", "EcoR V", "Not I", "Xho I", "Xba I", "Apa I"],
        mcs1_defaults: ["Nhe I", "BamH I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pCMV-3Tag-1a-P2A",
        vector_system: "Mammalian",
        mcs1: ["Sac I", "Not I", "BamH I", "Pst I", "EcoR I", "EcoR V", "Hind III", "Sal I", "Xho I", "Apa I"],
        mcs1_defaults: ["Hind III", "Apa I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pCMV-3Tag-3a-P2A",
        vector_system: "Mammalian",
        mcs1: ["Sac I", "Not I", "BamH I", "Pst I", "EcoR I", "EcoR V", "Hind III", "Sal I", "Xho I", "Apa I"],
        mcs1_defaults: ["Not I", "EcoR I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pcDNA3.4",
        vector_system: "Mammalian",
        mcs1: ["BsmB I", "BspE I", "Xba I", "Afl II", "Age I", "EcoR V"],
        mcs1_defaults: ["Xba I", "EcoR V"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pGenLenti",
        vector_system: "Mammalian",
        mcs1: ["EcoR I", "BamH I", "AsiS I", "Mre I", "SgrA I", "Asc I", "Nhe I", "Bmt I", "Rsr II", "Mlu I", "BsiW I", "Pme I]"],
        mcs1_defaults: ["EcoR I", "Pme I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pBacPAK8",
        vector_system: "Insect",
        mcs1: ["BamH I", "Pst I", "Xho I", "BstB I", "Xba I", "Bgl II", "Kpn I", "Sac I", "EcoR I", "Sma I", "Not I"],
        mcs1_defaults: ["BamH I", "Not I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pBacPAK9",
        vector_system: "Insect",
        mcs1: ["BamH I", "Sma I", "EcoR I", "Sac I", "Kpn I", "Bgl II", "Xba I", "BstB I", "Xho I", "Pst I", " Not I"],
        mcs1_defaults: ["BamH I", "Not I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pAcG2T",
        vector_system: "Insect",
        mcs1: ["BamH I", "Sma I", "EcoR I"],
        mcs1_defaults: ["Sma I", "EcoR I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pAcHLT A",
        vector_system: "Insect",
        mcs1: ["Nde I", "EcoR I", "Nco I", "Sac I", "Not I", "Pst I", "Kpn I", "Sma I", "Bgl II"],
        mcs1_defaults: ["EcoR I", "Bgl II"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pAcHLT B",
        vector_system: "Insect",
        mcs1: ["Xho I", "EcoR I", "Nco I", "Sac I", "Not I", "Pst I", "Kpn I", "Sma I", "Bgl II"],
        mcs1_defaults: ["Xho I", "Bgl II"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pAcHLT C",
        vector_system: "Insect",
        mcs1: ["Nde I", "Xho I", "EcoR I", "Nco I", "Sac I", "Not I", "Pst I", "Kpn I", "Sma I", "Bgl II"],
        mcs1_defaults: ["Nde I", "Bgl II"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pAcGHLT A",
        vector_system: "Insect",
        mcs1: ["Nde I", "EcoR I", "Nco I", "Sac I", "Not I", "Pst I", "Kpn I", "Sma I", "Bgl II"],
        mcs1_defaults: ["Nde I", "Bgl II"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pAcGHLT B",
        vector_system: "Insect",
        mcs1: ["Xho I", "EcoR I", "Nco I", "Sac I", "Not I", "Pst I", "Kpn I", "Sma I", "Bgl II"],
        mcs1_defaults: ["Xho I", "Bgl II"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pAcGHLT C",
        vector_system: "Insect",
        mcs1: ["Nde I", "Xho I", "EcoR I", "Nco I", "Sac I", "Not I", "Pst I", "Kpn I", "Sma I", "Bgl II"],
        mcs1_defaults: ["Nde I", "Bgl II"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pAcSG2",
        vector_system: "Insect",
        mcs1: ["Xho I", "EcoR I", "Nco I", "Sac I", "Not I", "Kpn I", "Sma I", "Bgl II"],
        mcs1_defaults: ["Sac I", "Bgl II"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pBAC-1",
        vector_system: "Insect",
        mcs1: ["BamH I", "EcoR I", "Sac I", "Hind III", "Not I", "Xho I"],
        mcs1_defaults: ["BamH I", "Xho I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pFastBac1",
        vector_system: "Insect",
        mcs1: ["BamH I", "EcoR I", "Sal I", "Sac I", "Spe I", "Not I", "BstB I", "Xba I", "Pst I", "Xho I", "Kpn I", "Hind III"],
        mcs1_defaults: ["BamH I", "Xho I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pFastBacHT-A",
        vector_system: "Insect",
        mcs1: ["Nco I", "BamH I", "EcoR I", "Sal I", "Spe I", "Not I", "Xba I", "Pst I", "Xho I", "Kpn I", "Hind III"],
        mcs1_defaults: ["Nco I", "Hind III"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pFastBacHT-B",
        vector_system: "Insect",
        mcs1: ["Nco I", "BamH I", "EcoR I", "Sal I", "Sac I", "Spe I", "Not I", "Xba I", "Pst I", "Xho I", "Kpn I", "Hind III"],
        mcs1_defaults: ["Nco I", "Hind III"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pFastBacHT-C",
        vector_system: "Insect",
        mcs1: ["Nco I", "BamH I", "EcoR I", "Sal I", "Sac I", "Spe I", "Not I", "Xba I", "Pst I", "Xho I", "Kpn I", "Hind III"],
        mcs1_defaults: ["Nco I", "Hind III"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pFastBac-Dual",
        vector_system: "Insect",
        mcs1: ["BamH I", "EcoR I", "Sal I", "Sac I", "Spe I", "Not I", "BstB I", "Xba I", "Pst I", "Hind III"],
        mcs1_defaults: ["BamH I", "Hind III"],
        mcs2: ["Sma I", "Xho I", "Nco I", "Nhe I", "Sph I", "Kpn I"],
        mcs2_defaults: ["Sma I", "Kpn I"]
    }, {
        vector_name: "pBluescript II KS(-)",
        vector_system: "Bacterial",
        mcs1: ["Sac I", "Not I", "Xba I", "Spe I", "BamH I", "Sma I", "Pst I", "EcoR I", "EcoR V", "Hind III", "Sal I", "Xho I", "Kpn I"],
        mcs1_defaults: ["Not I", "Xho I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pBluescript II KS(+)",
        vector_system: "Bacterial",
        mcs1: ["Sac I", "Not I", "Xba I", "Spe I", "BamH I", "Sma I", "Pst I", "EcoR I", "EcoR V", "Hind III", "Sal I", "Xho I", "Kpn I"],
        mcs1_defaults: ["Not I", "Xho I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pBluescript II SK(-)",
        vector_system: "Bacterial",
        mcs1: ["Kpn I", "Xho I", "Sal I", "Hind III", "EcoR V", "EcoR I", "Pst I", "Sma I", "BamH I", "Spe I", "Xba I", "Not I", "Sac I"],
        mcs1_defaults: ["Xho I", "Not I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pBluescript II SK(+)",
        vector_system: "Bacterial",
        mcs1: ["Kpn I", "Xho I", "Sal I", "Hind III", "EcoR V", "EcoR I", "Pst I", "Sma I", "BamH I", "Spe I", "Xba I", "Not I", "Sac I"],
        mcs1_defaults: ["Xho I", "Not I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-3a",
        vector_system: "Bacterial",
        mcs1: ["Nde I", "BamH I", "Blp I"],
        mcs1_defaults: ["BamH I", "Blp I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-3b",
        vector_system: "Bacterial",
        mcs1: ["Nde I", "BamH I", "Blp I"],
        mcs1_defaults: ["BamH I", "Blp I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-3c",
        vector_system: "Bacterial",
        mcs1: ["Nde I", "BamH I", "Blp I"],
        mcs1_defaults: ["BamH I", "Blp I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-3d",
        vector_system: "Bacterial",
        mcs1: ["Nco I", "BamH I", "Blp I"],
        mcs1_defaults: ["BamH I", "Blp I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-9a",
        vector_system: "Bacterial",
        mcs1: ["Nde I", "BamH I", "Blp I"],
        mcs1_defaults: ["BamH I", "Blp I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-11a",
        vector_system: "Bacterial",
        mcs1: ["Nde I", "Nhe I", "BamH I", "Blp I"],
        mcs1_defaults: ["Nde I", "BamH I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-11b",
        vector_system: "Bacterial",
        mcs1: ["Nde I", "Nhe I", "BamH I", "Blp I"],
        mcs1_defaults: ["Nde I", "BamH I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-11c",
        vector_system: "Bacterial",
        mcs1: ["Nde I", "Nhe I", "BamH I", "Blp I"],
        mcs1_defaults: ["BamH I", "Blp I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-11d",
        vector_system: "Bacterial",
        mcs1: ["Nde I", "Nhe I", "BamH I", "Blp I"],
        mcs1_defaults: ["BamH I", "Blp I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-14b",
        vector_system: "Bacterial",
        mcs1: ["Nco I", "Nde I", "Xho I", "BamH I", "Blp I"],
        mcs1_defaults: ["Nde I", "BamH I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-15b",
        vector_system: "Bacterial",
        mcs1: ["Nco I", "Nde I", "Xho I", "BamH I", "Blp I"],
        mcs1_defaults: ["Nde I", "BamH I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-16b",
        vector_system: "Bacterial",
        mcs1: ["Nco I", "Nde I", "Xho I", "BamH I", "Blp I"],
        mcs1_defaults: ["Nde I", "BamH I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-17b",
        vector_system: "Bacterial",
        mcs1: ["Nde I", "Nhe I", "Hind III", "Kpn I", "Sac I", "BamH I", "Spe I", "EcoR I", "EcoR V", "Not I", "Xho I"],
        mcs1_defaults: ["Hind III", "Xho I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-19b",
        vector_system: "Bacterial",
        mcs1: ["Nco I", "Nde I", "Xho I", "BamH I"],
        mcs1_defaults: ["Nde I", "BamH I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-20b(+)",
        vector_system: "Bacterial",
        mcs1: ["Nde I", "Nco I", "EcoR V", "BamH I", "EcoR I", "Sac I", "Sal I", "Hind III", "Not I", "Xho I"],
        mcs1_defaults: ["Nco I", "Xho I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-21a(+)",
        vector_system: "Bacterial",
        mcs1: ["Nde I", "Nhe I", "BamH I", "EcoR I", "Sac I", "Sal I", "Hind III", "Not I", "Xho I"],
        mcs1_defaults: ["Nde I", "BamH I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-21b(+)",
        vector_system: "Bacterial",
        mcs1: ["Nde I", "Nhe I", "BamH I", "EcoR I", "Sac I", "Sal I", "Hind III", "Not I", "Xho I"],
        mcs1_defaults: ["Nde I", "BamH I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-21d(+)",
        vector_system: "Bacterial",
        mcs1: ["Nco I", "BamH I", "EcoR I", "Sac I", "Sal I", "Hind III", "Not I", "Xho I"],
        mcs1_defaults: ["Nco I", "BamH I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-22b(+)",
        vector_system: "Bacterial",
        mcs1: ["Nde I", "BamH I", "EcoR I", "Sac I", "Sal I", "Hind III", "Not I", "Xho I"],
        mcs1_defaults: ["Nde I", "BamH I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-23a(+)",
        vector_system: "Bacterial",
        mcs1: ["Nde I", "Nhe I", "BamH I", "EcoR I", "Sac I", "Sal I", "Hind III", "Not I", "Xho I"],
        mcs1_defaults: ["Nde I", "BamH I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-24a(+)",
        vector_system: "Bacterial",
        mcs1: ["Nde I", "Nhe I", "BamH I", "EcoR I", "Sac I", "Sal I", "Hind III", "Not I", "Xho I"],
        mcs1_defaults: ["Nde I", "BamH I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-24a(+)-TEV",
        vector_system: "Bacterial",
        mcs1: ["Nde I", "Nhe I", "BamH I", "EcoR I", "Sac I", "Sal I", "Hind III", "Not I", "Xho I"],
        mcs1_defaults: ["Nde I", "BamH I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-24b(+)",
        vector_system: "Bacterial",
        mcs1: ["Nde I", "Nhe I", "BamH I", "EcoR I", "Sac I", "Sal I", "Hind III", "Not I", "Xho I"],
        mcs1_defaults: ["Nde I", "BamH I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-24c(+)",
        vector_system: "Bacterial",
        mcs1: ["Nde I", "Nhe I", "BamH I", "EcoR I", "Sac I", "Sal I", "Hind III", "Not I", "Xho I"],
        mcs1_defaults: ["Nde I", "BamH I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-24d(+)",
        vector_system: "Bacterial",
        mcs1: ["Nco I", "BamH I", "EcoR I", "Sac I", "Sal I", "Hind III", "Not I", "Xho I"],
        mcs1_defaults: ["Nco I", "BamH I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-25b(+)",
        vector_system: "Bacterial",
        mcs1: ["Nde I", "Nco I", "BamH I", "EcoR I", "Sac I", "Sal I", "Hind III", "Not I", "Xho I", "Nhe I"],
        mcs1_defaults: ["Nde I", "BamH I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-26b(+)",
        vector_system: "Bacterial",
        mcs1: ["Nde I", "Nco I", "BamH I", "EcoR I", "Sac I", "Sal I", "Hind III", "Not I", "Xho I"],
        mcs1_defaults: ["Nde I", "BamH I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-27b(+)",
        vector_system: "Bacterial",
        mcs1: ["Nde I", "Nco I", "BamH I", "EcoR I", "Sac I", "Sal I", "Hind III", "Not I", "Xho I", "Nhe I"],
        mcs1_defaults: ["Nde I", "BamH I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-28a(+)",
        vector_system: "Bacterial",
        mcs1: ["Nco I", "Nde I", "Nhe I", "BamH I", "EcoR I", "Sac I", "Sal I", "Hind III", "Not I", "Xho I"],
        mcs1_defaults: ["Nco I", "BamH I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-28a(+)-TEV",
        vector_system: "Bacterial",
        mcs1: ["Nco I", "Nde I", "Nhe I", "BamH I", "EcoR I", "Sac I", "Sal I", "Hind III", "Not I", "Xho I"],
        mcs1_defaults: ["Nco I", "BamH I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-28b(+)",
        vector_system: "Bacterial",
        mcs1: ["Nco I", "Nde I", "Nhe I", "BamH I", "EcoR I", "Sac I", "Sal I", "Hind III", "Not I", "Xho I"],
        mcs1_defaults: ["Nco I", "BamH I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-28c(+)",
        vector_system: "Bacterial",
        mcs1: ["Nco I", "Nde I", "Nhe I", "BamH I", "EcoR I", "Sac I", "Sal I", "Hind III", "Not I", "Xho I"],
        mcs1_defaults: ["Nco I", "BamH I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-29a(+)",
        vector_system: "Bacterial",
        mcs1: ["Nde I", "Bgl II", "Kpn I", "Nco I", "EcoR V", "BamH I", "EcoR I", "Sac I", "Sal I", "Hind III", "Not I", "Xho I"],
        mcs1_defaults: ["Nde I", "Kpn I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-29b(+)",
        vector_system: "Bacterial",
        mcs1: ["Nde I", "Bgl II", "Kpn I", "Nco I", "EcoR V", "BamH I", "EcoR I", "Sac I", "Sal I", "Hind III", "Not I", "Xho I"],
        mcs1_defaults: ["Nde I", "Kpn I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-29c(+)",
        vector_system: "Bacterial",
        mcs1: ["Nde I", "Bgl II", "Kpn I", "Nco I", "EcoR V", "BamH I", "EcoR I", "Sac I", "Sal I", "Hind III", "Not I", "Xho I"],
        mcs1_defaults: ["Nde I", "Kpn I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-30a(+)",
        vector_system: "Bacterial",
        mcs1: ["Nde I", "Bgl II", "Kpn I", "Nco I", "EcoR V", "BamH I", "EcoR I", "Sac I", "Sal I", "Hind III", "Not I", "Xho I"],
        mcs1_defaults: ["Nde I", "Kpn I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-30b(+)",
        vector_system: "Bacterial",
        mcs1: ["Nde I", "Bgl II", "Kpn I", "Nco I", "EcoR V", "BamH I", "EcoR I", "Sac I", "Sal I", "Hind III", "Not I", "Xho I"],
        mcs1_defaults: ["Nde I", "Kpn I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-30c(+)",
        vector_system: "Bacterial",
        mcs1: ["Nde I", "Bgl II", "Kpn I", "Nco I", "EcoR V", "BamH I", "EcoR I", "Sac I", "Sal I", "Hind III", "Not I", "Xho I"],
        mcs1_defaults: ["Nde I", "Kpn I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-31b(+)",
        vector_system: "Bacterial",
        mcs1: ["Nde I", "Xho I", "Blp I"],
        mcs1_defaults: ["Nde I", "Xho I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-32a(+)",
        vector_system: "Bacterial",
        mcs1: ["Msc I", "Bgl II", "Kpn I", "Nco I", "EcoR V", "BamH I", "EcoR I", "Sac I", "Sal I", "Hind III", "Not I", "Xho I"],
        mcs1_defaults: ["Msc I", "Kpn I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-32b(+)",
        vector_system: "Bacterial",
        mcs1: ["Msc I", "Bgl II", "Kpn I", "Nco I", "EcoR V", "BamH I", "EcoR I", "Sac I", "Sal I", "Hind III", "Not I", "Xho I"],
        mcs1_defaults: ["Msc I", "Kpn I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-41a(+)",
        vector_system: "Bacterial",
        mcs1: ["Nde I", "Bgl II", "Kpn I", "PshA I", "Nco I", "EcoR V", "BamH I", "EcoR I", "Asc I", "Pst I", "Sac I", "Sal I", "Hind III", "Not I", "Xho I"],
        mcs1_defaults: ["Nde I", "Kpn I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-41b(+)",
        vector_system: "Bacterial",
        mcs1: ["Nde I", "Bgl II", "Kpn I", "PshA I", "Nco I", "EcoR V", "BamH I", "EcoR I", "Asc I", "Pst I", "Sac I", "Sal I", "Hind III", "Not I", "Xho I"],
        mcs1_defaults: ["Nde I", "Kpn I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-41c(+)",
        vector_system: "Bacterial",
        mcs1: ["Nde I", "Bgl II", "Kpn I", "Nco I", "EcoR V", "BamH I", "EcoR I", "Asc I", "Pst I", "Sac I", "Sal I", "Hind III", "Not I", "Xho I"],
        mcs1_defaults: ["Nde I", "Kpn I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-42a(+)",
        vector_system: "Bacterial",
        mcs1: ["Nde I", "Bgl II", "Kpn I", "PshA I", "Nco I", "EcoR V", "BamH I", "EcoR I", "Asc I", "Pst I", "Sac I", "Sal I", "Hind III", "Not I", "Xho I"],
        mcs1_defaults: ["Nde I", "Kpn I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-42b(+)",
        vector_system: "Bacterial",
        mcs1: ["Nde I", "Bgl II", "Kpn I", "Nco I", "EcoR V", "BamH I", "EcoR I", "Asc I", "Pst I", "Sac I", "Sal I", "Hind III", "Not I", "Xho I"],
        mcs1_defaults: ["Nde I", "Kpn I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-42c(+)",
        vector_system: "Bacterial",
        mcs1: ["Nde I", "Bgl II", "Kpn I", "Nco I", "EcoR V", "BamH I", "EcoR I", "Asc I", "Pst I", "Sac I", "Sal I", "Hind III", "Not I", "Xho I"],
        mcs1_defaults: ["Nde I", "Kpn I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-43.1a(+)",
        vector_system: "Bacterial",
        mcs1: ["Nde I", "Sac II", "Sma I", "Sac I", "BamH I", "EcoR I", "Asc I", "Pst I", "Sal I", "Kpn I", "Hind III", "Not I", "Xho I"],
        mcs1_defaults: ["Nde I", "BamH I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-43.1b(+)",
        vector_system: "Bacterial",
        mcs1: ["Nde I", "Spe I", "Sac II", "Sma I", "Sac I", "BamH I", "EcoR I", "Asc I", "Pst I", "Sal I", "Kpn I", "Hind III", "Not I", "Xho I"],
        mcs1_defaults: ["Nde I", "BamH I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-45b(+)",
        vector_system: "Bacterial",
        mcs1: ["Nco I", "Kpn I", "BamH I", "Sac I", "Pst I", "Sal I", "Hind III", "Not I", "Xho I", "Pac I"],
        mcs1_defaults: ["Nco I", "BamH I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-50b(+)",
        vector_system: "Bacterial",
        mcs1: ["Nde I", "Sma I", "Kpn I", "BamH I", "EcoR I", "Asc I", "Sal I", "Hind III", "Not I", "Sac I", "Xho I"],
        mcs1_defaults: ["Nde I", "BamH I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-51b(+)",
        vector_system: "Bacterial",
        mcs1: ["Nco I", "Kpn I", "BamH I", "Sal I", "Hind III", "Not I", "Sac I"],
        mcs1_defaults: ["Nco I", "BamH I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pET-52b(+)",
        vector_system: "Bacterial",
        mcs1: ["Nco I", "Sma I", "Kpn I", "BamH I", "Sal I", "Not I", "Sac I"],
        mcs1_defaults: ["Nco I", "BamH I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pGEX-2TK",
        vector_system: "Bacterial",
        mcs1: ["BamH I", "Sma I", "EcoR I"],
        mcs1_defaults: ["BamH I", "EcoR I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pGEX-4T-1",
        vector_system: "Bacterial",
        mcs1: ["BamH I", "EcoR I", "Sma I", "Sal I", "Xho I", "Not I"],
        mcs1_defaults: ["EcoR I", "Not I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pGEX-4T-2",
        vector_system: "Bacterial",
        mcs1: ["BamH I", "EcoR I", "Sma I", "Sal I", "Xho I", "Not I"],
        mcs1_defaults: ["EcoR I", "Not I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pGEX-4T-3",
        vector_system: "Bacterial",
        mcs1: ["BamH I", "EcoR I", "Sma I", "Sal I", "Xho I", "Not I"],
        mcs1_defaults: ["EcoR I", "Not I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pGEX-5X-1",
        vector_system: "Bacterial",
        mcs1: ["BamH I", "EcoR I", "Sma I", "Sal I", "Xho I", "Not I"],
        mcs1_defaults: ["BamH I", "Not I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pGEX-5X-2",
        vector_system: "Bacterial",
        mcs1: ["BamH I", "EcoR I", "Sma I", "Sal I", "Xho I", "Not I"],
        mcs1_defaults: ["BamH I", "Not I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pGEX-5X-3",
        vector_system: "Bacterial",
        mcs1: ["BamH I", "EcoR I", "Sma I", "Sal I", "Xho I", "Not I"],
        mcs1_defaults: ["BamH I", "Not I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pGEX-6P-1",
        vector_system: "Bacterial",
        mcs1: ["BamH I", "EcoR I", "Sma I", "Sal I", "Xho I", "Not I"],
        mcs1_defaults: ["BamH I", "Not I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pGEX-6P-2",
        vector_system: "Bacterial",
        mcs1: ["BamH I", "EcoR I", "Sma I", "Sal I", "Xho I", "Not I"],
        mcs1_defaults: ["BamH I", "Not I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pGEX-6P-3",
        vector_system: "Bacterial",
        mcs1: ["BamH I", "EcoR I", "Sma I", "Sal I", "Xho I", "Not I"],
        mcs1_defaults: ["BamH I", "Not I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pMAL-c4x",
        vector_system: "Bacterial",
        mcs1: ["Nde I", "Sac I", "Ava I", "EcoR I", "BamH I", "Xba I", "Sal I", "Hind III"],
        mcs1_defaults: ["Sac I", "BamH I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pMAL-c5E",
        vector_system: "Bacterial",
        mcs1: ["Sac I", "Ava I", "Kpn I", "Nde I", "Nco I", "Not I", "EcoR V", "Sal I", "BamH I", "EcoR I", "Pst I", "Hind III"],
        mcs1_defaults: ["Sac I", "BamH I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pMAL-c5x",
        vector_system: "Bacterial",
        mcs1: ["Sac I", "Ava I", "Nde I", "Nco I", "Not I", "EcoR V", "Sal I", "BamH I", "EcoR I", "Pst I", "Hind III"],
        mcs1_defaults: ["Sac I", "BamH I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pMAL-p5E",
        vector_system: "Bacterial",
        mcs1: ["Sac I", "Ava I", "Kpn I", "Nde I", "Nco I", "Not I", "EcoR V", "Sal I", "BamH I", "EcoR I", "Pst I", "Hind III"],
        mcs1_defaults: ["Sac I", "BamH I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pMAL-p5G",
        vector_system: "Bacterial",
        mcs1: ["Sac I", "Ava I", "Kpn I", "Nde I", "Nco I", "Not I", "EcoR V", "Sal I", "BamH I", "EcoR I", "Pst I", "Hind III"],
        mcs1_defaults: ["Sac I", "BamH I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pMAL-p5X",
        vector_system: "Bacterial",
        mcs1: ["Sac I", "Ava I", "Nde I", "Nco I", "Not I", "EcoR V", "Sal I", "BamH I", "EcoR I", "Pst I", "Hind III"],
        mcs1_defaults: ["Sac I", "BamH I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pQE-1",
        vector_system: "Bacterial",
        mcs1: ["Sac I", "Not I", "Kpn I", "Sal I", "Pst I", "Hind III", "Blp I"],
        mcs1_defaults: ["Sac I", "Hind III"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pQE-60",
        vector_system: "Bacterial",
        mcs1: ["Nco I", "BamH I", "Bgl II", "Hind III"],
        mcs1_defaults: ["Nco I", "Hind III"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pGS-21a",
        vector_system: "Bacterial",
        mcs1: ["Nde I", "Bgl II", "Kpn I", "Nco I", "EcoR V", "BamH I", "EcoR I", "Sac I", "Sal I", "Hind III", "Not I", "Xho I"],
        mcs1_defaults: ["Nde I", "Kpn I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pETDuet-1",
        vector_system: "Bacterial",
        mcs1: ["Nco I", "BamH I", "EcoR I", "Sac I", "Pst I", "Sal I", "Hind III", "Not I"],
        mcs1_defaults: ["Nco I", "Not I"],
        mcs2: ["Nde I", "Bgl II", "EcoR V", "Kpn I", "Xho I", "Blp I"],
        mcs2_defaults: ["Nde I", "Xho I"]
    }, {
        vector_name: "pCDFDuet-1",
        vector_system: "Bacterial",
        mcs1: ["Nco I", "BamH I", "EcoR I", "Sac I", "Pst I", "Sal I", "Hind III", "Not I"],
        mcs1_defaults: ["Nco I", "Not I"],
        mcs2: ["Nde I", "Bgl II", "EcoR V", "Kpn I", "Xho I"],
        mcs2_defaults: ["Nde I", "Xho I"]
    }, {
        vector_name: "pRSFDuet-1",
        vector_system: "Bacterial",
        mcs1: ["Nco I", "BamH I", "EcoR I", "Sac I", "Pst I", "Sal I", "Hind III", "Not I"],
        mcs1_defaults: ["Nco I", "Not I"],
        mcs2: ["Nde I", "Bgl II", "EcoR V", "Kpn I", "Xho I"],
        mcs2_defaults: ["Nde I", "Xho I"]
    }, {
        vector_name: "pCOLADuet-1",
        vector_system: "Bacterial",
        mcs1: ["Nco I", "BamH I", "EcoR I", "Sac I", "Pst I", "Sal I", "Hind III", "Not I"],
        mcs1_defaults: ["Nco I", "Not I"],
        mcs2: ["Nde I", "Bgl II", "Kpn I", "Xho I"],
        mcs2_defaults: ["Nde I", "Xho I"]
    }, {
        vector_name: "pGEX-4T-1-H(RBS)",
        vector_system: "Bacterial",
        mcs1: ["BamH I", "EcoR I", "Sma I", "Sal I", "Xho I", "Not I"],
        mcs1_defaults: ["EcoR I", "Not I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pGEX-4T-1-M(RBS)",
        vector_system: "Bacterial",
        mcs1: ["BamH I", "EcoR I", "Sma I", "Sal I", "Xho I", "Not I"],
        mcs1_defaults: ["EcoR I", "Not I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pGEX-5X-1-H(RBS)",
        vector_system: "Bacterial",
        mcs1: ["BamH I", "EcoR I", "Sma I", "Sal I", "Xho I", "Not I"],
        mcs1_defaults: ["BamH I", "Not I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pGEX-5X-1-M(RBS)",
        vector_system: "Bacterial",
        mcs1: ["BamH I", "EcoR I", "Sma I", "Sal I", "Xho I", "Not I"],
        mcs1_defaults: ["BamH I", "Not I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pGEX-6P-1-H(RBS)",
        vector_system: "Bacterial",
        mcs1: ["BamH I", "EcoR I", "Sma I", "Sal I", "Xho I", "Not I"],
        mcs1_defaults: ["BamH I", "Not I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pGEX-6P-1-M(RBS)",
        vector_system: "Bacterial",
        mcs1: ["BamH I", "EcoR I", "Sma I", "Sal I", "Xho I", "Not I"],
        mcs1_defaults: ["BamH I", "Not I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pMAL-c4x-1-H(RBS)",
        vector_system: "Bacterial",
        mcs1: ["Nde I", "Sac I", "Ava I", "EcoR I", "BamH I", "Xba I", "Sal I", "Hind III"],
        mcs1_defaults: ["Sac I", "BamH I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pMAL-c4x-1-M(RBS)",
        vector_system: "Bacterial",
        mcs1: ["Nde I", "Sac I", "Ava I", "EcoR I", "BamH I", "Xba I", "Sal I", "Hind III"],
        mcs1_defaults: ["Sac I", "BamH I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pIEx-1",
        vector_system: "Insect",
        mcs1: ["Nco I", "Xcm I", "PflM I", "PshA I", "BseR I", "BamH I", "Mfe I", "Sac I", "BsrG I", "Asc I", "Pst I", "Sal I", "Kpn I", "Age I", "Hind III", "Not I", "Pml I", "Bbs I", "Xho I"],
        mcs1_defaults: ["Nco I", "Not I"],
        mcs2: null,
        mcs2_defaults: null
    }, {
        vector_name: "pTriEX-4",
        vector_system: "All",
        mcs1: ["Nco I", "Sma I", "PshA I", "BseR I", "EcoR V", "Sac I", "BamH I", "EcoR I", "Bgl II", "Asc I", "Pst I", "Kpn I", "Hind III", "Not I", "Pvu II", "Pml I", "Xho I", "Dra III "],
        mcs1_defaults: ["Nco I", "Not I"],
        mcs2: null,
        mcs2_defaults: null
    }];

export { Elem_list, vector_list }
