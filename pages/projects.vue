<template>
    <div class="container mx-auto pt-12 overflow-hidden">
        <h1 class="text-4xl text-white text-center text1 ">Hello, Welcome To <p class="inline-block text-green-400">My Projects</p> Page</h1>
        <div class="pt-12 flex flex-row flex-wrap">
            <div class="w-full lg:w-1/2 2xl:w-1/3 mb-4" v-for="(item, index) in cards" :key="index">
                <div :class="'p-4 flex flex-col box' + (index + 1)">
                    <img @mouseover="mouseOverImg" @mouseleave="mouseLeaveImg" :class="'rounded-t-lg w-11/12 m-auto img img' + (index + 1)" :src="item.img" alt="">
                    <div :class="'text-gray-600 bg-white p-4 rounded-lg -mx-2 border-gray-300 border text-card text-card' + (index + 1)">
                        <h3 class="text-2xl pb-3">{{ item.head }}</h3>
                        <p>
                            {{ item.body }}
                            <a v-if="item.link" :href="item.link" class="text-blue-500" target="_blank">Lihat Website</a>
                        </p>
                        <pre v-if="item.text_add">
                            {{ item.text_add }}
                        </pre>
                        <template v-if="item.teknologi.length > 0">
                            <div class="mt-2">
                                <span class="bg-green-600 text-gray-200 py-1 px-2 rounded-sm m-1 inline-block" v-for="(item2, index2) in item.teknologi" :key="index2">
                                    {{ item2 }}
                                </span>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import gsap from "gsap/dist/gsap"
import scrollTrigger from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(scrollTrigger);
export default {
    data() {
        return {
            cards: [
                {
                    img: require(`~/assets/project/bri_logo.png`),
                    head: "Api BRI Update Merchant Qris",
                    body: "API ini digunakan untuk memperbarui data merchant yang terhubung dengan sistem QRIS, memastikan informasi tetap akurat, terkini, dan sesuai dengan kebutuhan operasional.",
                    teknologi: [
                        'golang',
                        'mysqli',
                        'elasticsearch',
                        'bamboo',
                        'redis'
                    ]
                },
                {
                    img: require(`~/assets/project/bri_logo.png`),
                    head: "Api BRI Qris untuk alipay",
                    body: "API ini menyediakan berbagai fungsi untuk mendukung proses pembayaran melalui pihak ketiga (Alipay), termasuk pembuatan (generate) QRIS, pembatalan (cancel), pembayaran (payment), pengecekan status transaksi (check status), serta pengembalian dana (refund). Dengan API ini, sistem dapat mengelola transaksi secara efisien dan memastikan pengalaman pembayaran yang lebih lancar dan aman.",
                    teknologi: [
                        'golang',
                        'mysqli',
                        'elasticsearch',
                        'bamboo',
                        'redis'
                    ]
                },
                {
                    img: require(`~/assets/project/bri_logo.png`),
                    head: "Api BRI Cancel Qris MPN",
                    body: "API ini berfungsi untuk membatalkan QRIS yang telah digenerate sebelumnya, memastikan bahwa kode tersebut tidak dapat digunakan kembali. Dengan menggunakan API ini, sistem dapat mengelola transaksi dengan lebih aman dan mencegah penyalahgunaan QRIS yang sudah tidak berlaku.",
                    teknologi: [
                        'golang',
                        'mysqli',
                        'elasticsearch',
                        'bamboo'
                    ]
                },
                {
                    img: require(`~/assets/project/puti_logo.jpg`),
                    head: "Api New SSO Telkom University",
                    body: "Saya mengembangkan backend untuk sistem Single Sign-On (SSO) guna memenuhi kebutuhan Universitas Telkom. Sistem ini dirancang untuk mengelola autentikasi pengguna secara terpusat, sehingga dapat digunakan di berbagai aplikasi yang ada di lingkungan Universitas Telkom. Dengan implementasi SSO ini, proses login menjadi lebih efisien, aman, dan terintegrasi, memungkinkan pengguna untuk mengakses berbagai layanan universitas dengan satu kali autentikasi tanpa perlu login berulang kali di setiap aplikasi.",
                    teknologi: [
                        'Go Echo',
                        'postgresql',
                        'redis',
                        'queue',
                        'cmd',
                    ]
                },
                {
                    img: require(`~/assets/project/puti_logo.jpg`),
                    head: "Api SATU Data Universitas Sumatera Utara",
                    body: "Saya mengembangkan backend untuk sistem Satu Data guna memenuhi kebutuhan Universitas Sumatera Utara (USU) melalui Telkom University (PUTI). Pengembangan ini berfokus pada integrasi dan pengelolaan data di berbagai bidang, termasuk akademik, sumber daya manusia (SDM), alumni, serta dashboard pemantauan. Dengan sistem ini, diharapkan USU dapat memiliki ekosistem data yang lebih terstruktur, akurat, dan terpusat, sehingga dapat mendukung pengambilan keputusan yang lebih efektif dan efisien.",
                    teknologi: [
                        'laravel 6',
                        'postgresql',
                        'redis',
                        'queue',
                    ]
                },
                {
                    img: require(`~/assets/project/puti_logo.jpg`),
                    head: "Api SATU Data Telkom University",
                    body: "Saya mengembangkan backend untuk sistem Satu Data yang dirancang khusus guna memenuhi kebutuhan Universitas Telkom, terutama di Bandung. Sistem ini bertujuan untuk mengintegrasikan dan mengelola data secara efisien di berbagai bidang, termasuk akademik, sumber daya manusia (SDM), alumni, serta dashboard pemantauan. Dengan pengembangan ini, diharapkan Universitas Telkom dapat memiliki sistem yang lebih terstruktur, akurat, dan terpusat untuk mendukung pengambilan keputusan yang lebih baik.",
                    teknologi: [
                        'laravel 6',
                        'postgresql',
                        'redis',
                        'queue',
                        'Go Echo',
                        'Nest JS',
                        'Node JS',
                    ]
                },
                {
                    img: require(`~/assets/project/rest_api_gofiber.png`),
                    head: "Rest Api Gofiber",
                    body: "Rest API ini dibuat untuk mempelajari tentang Golang Fiber. Di sini, Saya mengimplementasikan JWT untuk autentikasi, Gorm untuk ORM, Redis untuk caching, command-line interface, Elasticsearch, goroutines, dan queue. Beberapa fitur tersebut telah berhasil diimplementasikan dalam proyek ini.",
                    link: "https://github.com/mrzf833/go-fiber-clean-architecture",
                    teknologi: [
                        'golang',
                        'fiber',
                        'postman',
                        'gorm',
                        'mysql',
                        'swagger',
                        'jwt token',
                        'docker',
                        'redis',
                        'cli (cobra)',
                        'elasticsearch',
                        'queue',
                    ]
                },
                {
                    img: require(`~/assets/project/crypto.png`),
                    head: "Crypto",
                    body: "aplikasi ini di desain oleh Calvin. jadi ini saya slincing desain ke front end saja.",
                    link: "https://crypto.mrzf833.me",
                    teknologi: [
                        'tailwind css',
                        'html',
                        'docker'
                    ]
                },
                {
                    img: require(`~/assets/project/pelayanan-kesehatan.png`),
                    head: "Pelayanan Kesehatan",
                    body: "aplikasi ini berguna untuk mencari berita yang valid dan sudah di validasi oleh dokternya lansung",
                    link: "https://web-kesehatan.mrzf833.me",
                    text_add: "\n-untuk umum\nemail: umum@app.com\npassword: passsword\n-untuk doctor\nemail: doctor@app.com\npassword: passsword",
                    teknologi: [
                        'laravel 8',
                        'nuxt js 2',
                        'tailwind css',
                        'pusher',
                        'docker'
                    ]
                },
                {
                    img: require(`~/assets/project/chat-sederhana.png`),
                    head: "Chat Sederhana",
                    body: "aplikasi sederhana ini berguna untuk mengirim atau menerima pesan",
                    link: "https://web-chat.mrzf833.me",
                    text_add: "\nusername: user1\npassword: user1\n\nusername: user2\npassword: user2",
                    teknologi: [
                        'laravel 8',
                        'nuxt js 2',
                        'tailwind css',
                        'pusher',
                        'docker'
                    ]
                },
                {
                    img: require(`~/assets/project/koperasi.png`),
                    head: "Koperasi",
                    body: "aplikasi ini untuk mengetahui keungan koperasi + point of sales dari client(SAKARAGUNA)",
                    teknologi: [
                        'laravel 8',
                        'bootstrap'
                    ]
                },
                {
                    img: require(`~/assets/project/laundry.png`),
                    head: "Laundry",
                    body: "aplikasi ini untuk mengelola usaha laundry",
                    teknologi: [
                        'laravel 8',
                        'bootstrap',
                        'docker'
                    ]
                },
                {
                    img: require(`~/assets/project/peminjaman_senjata.png`),
                    head: "Peminjaman Senjata",
                    body: "aplikasi ini untuk mengelola Gudang Senjata dari client(SAKARAGUNA)",
                    teknologi: [
                        'laravel',
                        'bootstrap'
                    ]
                },
                {
                    img: require(`~/assets/project/absensi_kendaraan.png`),
                    head: "Absensi Kendaraan",
                    body: "aplikasi ini untuk mengelola Data Kendaraan dari client(SAKARAGUNA)",
                    teknologi: [
                        'laravel',
                        'bootstrap'
                    ]
                },
                {
                    img: require(`~/assets/project/pengaduan_masyarakat.png`),
                    head: "Pengaduan Masyarakat",
                    body: "aplikasi ini berguna untuk membuat pengaduan dari masyarakat lansung di proses oleh admin aplikasi",
                    teknologi: [
                        'laravel',
                        'bootstrap',
                        'docker'
                    ]
                },
                {
                    img: require(`~/assets/project/pos.png`),
                    head: "Point Of Sales And Inventory",
                    body: "aplikasi ini berguna untuk memanajemen inventory dan melakukan transaksi penjualan",
                    teknologi: [
                        'laravel',
                        'bootstrap'
                    ]
                }
            ]
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.start()
        })
    },

    methods: {

        start: function(){
            gsap.to('.text1',{
                duration: 0.5,
                y: 0,
                opacity: 1
            })

            for (let i = 1;  i <= this.cards.length; i++) {
                gsap.to('.img' + i,{
                    scrollTrigger: {
                        trigger: '.box' + i,
                        start: "top bottom",
                        end:"bottom 10%",
                        toggleActions: "restart reverse restart reverse",
                    },
                    
                    duration: 0.5,
                    x: 0,
                    opacity: 1
                })

                gsap.to('.text-card' + i,{
                    scrollTrigger: {
                        trigger: '.box' + i,
                        start: "top bottom",
                        end:"bottom top",
                        toggleActions: "restart reverse restart reverse",
                    },
                    
                    duration: 0.5,
                    x: 0,
                    opacity: 1
                })
            }
        },
        mouseOverImg: function(e){
            e.target.style.transform = "rotate(3deg)"
        },
        mouseLeaveImg: function(e){
            e.target.style.transform = "rotate(0)"
        }
    },
}
</script>
<style scoped>
.text1{
    transform: translateY(-60px);
    opacity: 0;
}

.img{
    transform: translatex(60px);
    opacity: 0;
}

.text-card{
    transform: translatex(-60px);
    opacity: 0;
}
</style>
