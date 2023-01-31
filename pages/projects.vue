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
                    img: require(`~/assets/project/crypto.png`),
                    head: "Crypto",
                    body: "aplikasi ini di desain oleh Calvin. jadi ini saya slincing desain ke front end saja.",
                    link: "https://crypto-heroku-railway-production.up.railway.app/index.html",
                    teknologi: [
                        'tailwind css',
                        'html'
                    ]
                },
                {
                    img: require(`~/assets/project/pelayanan-kesehatan.png`),
                    head: "Pelayanan Kesehatan, (Maintenance API)",
                    body: "aplikasi ini berguna untuk mencari berita yang valid dan sudah di validasi oleh dokternya lansung",
                    link: "https://web-production-4f12.up.railway.app",
                    text_add: "\n-untuk umum\nemail: umum@app.com\npassword: passsword\n-untuk doctor\nemail: doctor@app.com\npassword: passsword",
                    teknologi: [
                        'laravel 8',
                        'nuxt js 2',
                        'tailwind css',
                        'pusher',
                    ]
                },
                {
                    img: require(`~/assets/project/chat-sederhana.png`),
                    head: "Chat Sederhana, (Maintenance API)",
                    body: "aplikasi sederhana ini berguna untuk mengirim atau menerima pesan",
                    link: "https://web-production-bf37.up.railway.app",
                    text_add: "\nusername: user1\npassword: user1\n\nusername: user2\npassword: user2",
                    teknologi: [
                        'laravel 8',
                        'nuxt js 2',
                        'tailwind css',
                        'pusher'
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
                        'bootstrap'
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
                        'bootstrap'
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
        this.start()
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
