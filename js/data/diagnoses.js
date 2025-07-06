export const diagnosesData = [
    {
        id: 1,
        ask: "Ceritakan keluhan utama yang sedang Ibu rasakan saat ini",
        progress: 20,
        riskKeywords: {
            ringan: [
                "sakit kepala", "pusing ringan", "capek", "lelah", "sedikit mual",
                "mengantuk", "pegal", "sulit tidur", "mulas-mulas", "nafsu makan berkurang",
                "sensasi tidak nyaman", "sering buang air kecil", "rasa panas di dada", 
                "gatal-gatal ringan", "bengkak di kaki"
            ],
            sedang: [
                "nyeri perut bagian bawah", "mual terus-menerus", "sakit punggung hebat", 
                "suhu hangat", "demam ringan", "sesak napas ringan", "kram perut", 
                "keluar cairan dari vagina", "kaki bengkak lebih dari biasa", 
                "mata berkunang", "pandangan kabur sebentar", "mual sampai muntah",
                "sakit ulu hati", "susah BAB", "sakit saat buang air kecil"
            ],
            tinggi: [
                "darah", "panas tinggi", "nyeri hebat", "perdarahan", "pusing berat", 
                "muntah-muntah", "tidak sadar", "tubuh lemas", "nyeri tak tertahankan", 
                "pandangan gelap", "terasa seperti akan jatuh", "jantung berdebar cepat", 
                "napas pendek", "perut keras sekali", "rasa melayang"
            ],
            sangatTinggi: [
                "pingsan", "kejang", "penglihatan hilang", "tak bisa berdiri", 
                "tubuh mati rasa", "rasa sakit luar biasa", "berdarah banyak", 
                "panas tinggi tak turun", "tak bisa bicara", "detak jantung tidak terasa", 
                "bau tidak enak dari miss V", "kontraksi kuat tanpa henti", 
                "air ketuban pecah", "badan menggigil hebat", "tak merespons suara"
            ]
        }
    },
    {
        id: 2,
        ask: "Sudah berapa lama Ibu merasakan keluhan tersebut?",
        progress: 40,
        riskKeywords: {
            ringan: [
                "baru saja", "sejak tadi pagi", "sekitar 1 jam", "sejak tadi", 
                "baru mulai", "sejak makan siang", "sejak bangun tidur", 
                "hanya sesaat", "baru hari ini", "sejak pagi", "baru sebentar", 
                "baru sejam lalu", "baru dua jam", "baru tiga jam", "baru empat jam"
            ],
            sedang: [
                "sejak kemarin", "dua hari lalu", "beberapa jam", "sudah beberapa jam", 
                "sejak sore", "sudah dari tadi", "sejak malam", "sejak semalam", 
                "sudah lama tapi ringan", "sejak minggu lalu", "sudah dari beberapa waktu", 
                "sejak 3 hari lalu", "sudah 4 hari", "sudah 5 hari", "sudah 6 hari"
            ],
            tinggi: [
                "sudah lebih dari seminggu", "sudah lama", "sejak lusa", 
                "sudah hampir dua minggu", "sudah dari bulan lalu", 
                "sudah lebih dari sepuluh hari", "sudah terus-menerus", 
                "sudah parah sejak tadi", "sudah memburuk", "sudah 7 hari", 
                "sudah 8 hari", "sudah 9 hari", "sudah 10 hari", 
                "sudah lebih dari seminggu", "sudah hampir dua minggu"
            ],
            sangatTinggi: [
                "sudah lupa pastinya", "sudah dari dulu", "sudah sejak lama banget", 
                "sudah bertahun-tahun", "sudah sejak sebelum hamil", 
                "sudah dari beberapa bulan", "sudah dari awal kehamilan", 
                "sudah dari trimester pertama", "sudah sejak lama dan semakin parah", 
                "sudah tidak ingat kapan", "sudah dari sebelumnya", 
                "sudah dari masa lalu", "sudah dari awal", 
                "sudah terus-menerus sejak lama", "sudah tidak bisa dihitung"
            ]
        }
    },
    {
        id: 3,
        ask: "Apakah ada kejadian atau kondisi tertentu yang mungkin menjadi pemicu keluhan ini?",
        progress: 60,
        riskKeywords: {
            ringan: [
                "capek", "melelahkan", "banyak aktivitas", "tidur kurang", 
                "makan tidak teratur", "stres pekerjaan", "tegang", "panik", 
                "terlalu banyak pikiran", "terlalu banyak gerak", 
                "naik tangga banyak", "duduk lama", "jalan jauh", 
                "cuaca panas", "minum kurang"
            ],
            sedang: [
                "stres berat", "terlalu banyak aktivitas", "tidak istirahat cukup", 
                "angkat beban", "jalan terlalu jauh", "terlalu banyak berdiri", 
                "terlalu banyak bekerja", "terkena debu", "terkena asap rokok", 
                "terkena polusi", "makanan pedas", "makanan tidak sehat", 
                "minum obat sembarangan", "tidak minum vitamin", "terlalu banyak menunduk"
            ],
            tinggi: [
                "jatuh", "benturan", "terkena pukulan", "terpelanting", 
                "tergelincir", "terguncang", "kecelakaan mobil", "kecelakaan motor", 
                "terjatuh dari tangga", "terjatuh saat berjalan", 
                "terjatuh dari kursi", "terpukul perut", "terinjak", 
                "terkena tekanan besar", "terkena benturan keras"
            ],
            sangatTinggi: [
                "trauma fisik", "kontak fisik keras", "tabrakan", "terkena ledakan", 
                "terkena api", "terkena air panas", "keracunan", 
                "terkena bahan kimia", "terkena listrik", "terjebak kebakaran", 
                "terkena serangan", "terkena kekerasan", "terkena benda tajam", 
                "terjepit pintu", "terkena insiden darurat"
            ]
        }
    },
    {
        id: 4,
        ask: "Apakah Ibu sedang mengonsumsi obat atau suplemen tertentu? Jika ya, sebutkan.",
        progress: 80,
        riskKeywords: {
            ringan: [
                "vitamin", "zinc", "fe", "asam folat", "omega 3", 
                "protein bubuk", "multivitamin", "tablet zat besi", 
                "kalsium", "probiotik", "fiber", "suplemen herbal", 
                "madu", "jahe", "kunyit"
            ],
            sedang: [
                "obat batuk", "antibiotik", "obat flu", "paracetamol", 
                "penurun demam", "obat alergi", "obat sakit kepala", 
                "obat mual", "obat asam lambung", "obat diare", 
                "obat maag", "obat pilek", "obat mabuk perjalanan", 
                "obat penenang", "obat pelancar ASI"
            ],
            tinggi: [
                "penghilang rasa sakit", "obat darah tinggi", "obat diabetes", 
                "obat migrain", "obat hormonal", "obat tiroid", 
                "obat kontrasepsi", "obat steroid", "obat anti inflamasi", 
                "obat penenang", "obat penurun tekanan darah", 
                "obat antikoagulan", "obat antidepresan", 
                "obat antiasma", "obat antiepilepsi"
            ],
            sangatTinggi: [
                "obat kuat", "jamu tradisional", "herbal tidak jelas", 
                "obat warung", "obat racikan", "obat dari internet", 
                "obat ilegal", "obat tidak terdaftar BPOM", 
                "obat asing", "obat dari luar negeri tanpa resep", 
                "obat daerah", "obat nenek moyang", "obat tidak resmi", 
                "obat kimia keras", "obat eksperimen"
            ]
        }
    },
    {
        id: 5,
        ask: "Apakah Ibu memiliki riwayat medis atau komplikasi kehamilan sebelumnya?",
        progress: 100,
        riskKeywords: {
            ringan: [
                "tidak ada", "belum pernah hamil", "belum punya anak", 
                "belum pernah melahirkan", "belum pernah operasi", 
                "tidak ada riwayat penyakit", "tidak ada gangguan", 
                "riwayat baik", "tidak ada masalah", "tidak ada komplikasi", 
                "tidak ada riwayat operasi", "tidak ada penyakit kronis", 
                "tidak ada riwayat darah tinggi", "tidak ada riwayat diabetes", 
                "tidak ada riwayat epilepsi"
            ],
            sedang: [
                "hipertensi", "diabetes gestasional", "asma", 
                "tiroid", "penyakit jantung ringan", "anemia", 
                "infeksi saluran kencing", "prematur ringan", 
                "abortus spontan", "kista rahim", "endometriosis", 
                "hipotiroid", "hipertiroid", "gangguan pencernaan", 
                "gangguan hormon"
            ],
            tinggi: [
                "eclampsia", "plasenta previa", "solusio plasenta", 
                "prematur berulang", "operasi caesar sebelumnya", 
                "abortus berulang", "kematian janin", 
                "gangguan pembekuan darah", "gangguan jantung berat", 
                "hipertensi kronik", "diabetes tipe 1", 
                "gangguan ginjal", "gangguan tiroid berat", 
                "gangguan autoimun", "komplikasi persalinan"
            ],
            sangatTinggi: [
                "eclampsia berulang", "plasenta akreta", "ruptur uterus", 
                "emboli air ketuban", "syok hemoragi", "infeksi nifas berat", 
                "gagal organ selama hamil", "stroke saat hamil", 
                "gangguan mental selama hamil", "gangguan psikologis berat", 
                "gangguan imun selama hamil", "komplikasi multidimensi", 
                "penyakit langka selama hamil", "kelainan darah langka", 
                "komplikasi jantung langka", "komplikasi paru-paru langka"
            ]
        }
    }
];