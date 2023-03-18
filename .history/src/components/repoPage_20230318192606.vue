<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="btnBack">
                    <button class="btnBck" @click="gobackHome"><span style="margin-right: 1.5rem;"><i class="fas fa-chevron-left"></i></span>
                        Back to HomePage</button>
                </div>
                <div class="cnt">
                    <div class="projct">
                        <h3 class="projecN">{{ name }}</h3>
                        <p class="abtPrj">{{ description }}</p>
                        <p class="abtPrj">Visibility: {{ visibility }}</p>
                        <p class="abtPrj">Created at: {{ created_at }}</p>
                        <!-- <p>Statistics</p> -->
                    </div>
                    <div>
                        <button class="pubStats">Public</button>
                    </div>
                </div>
                <div class="stats">
                    <h2>Statistics</h2>
                </div>
                <div class="bton">
                    <button class="btnStats">
                        <span style="margin: 0%; padding: 0%;"><i class="fas fa-code-branch"></i></span>
                        <p style="margin: 0%; padding: 0%;">{{forks}} Fork</p>
                    </button>
                    <button class="btnStats">
                        <span style="margin: 0%; padding: 0%;"><i class="far fa-star"></i></span>
                        <p style="margin: 0%; padding: 0%;">{{stargazers_count}}Stars</p>
                    </button>
                    <button class="btnStats">
                        <span style="margin: 0%; padding: 0%;"><i class="fas fa-code-branch"></i></span>
                        <p style="margin: 0%; padding: 0%;">Branches</p>
                    </button>
                    <button class="btnStats">
                        <span style="margin: 0%; padding: 0%;"><i class="fas fa-eye"></i></span>
                        <p style="margin: 0%; padding: 0%;">Watching</p>
                    </button>
                    <button class="btnStats">
                        <span style="margin: 0%; padding: 0%;"><i class="fas fa-code-branch"></i></span>
                        <p style="margin: 0%; padding: 0%;">Fork</p>
                    </button>
                    <button class="btnStats">
                        <span style="margin: 0%; padding: 0%;"><i class="fas fa-code-branch"></i></span>
                        <p style="margin: 0%; padding: 0%;">Fork</p>
                    </button>
                </div>
                <div class="stats">
                    <h4>Languages</h4>
                    <p>{{ language }}</p>
                    <h5>Has Downloads: {{has_downloads}}</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"

export default {
    name: 'repoPage',
    data() {
        return {
            name: '',
            language: '',
            description: '',
            visibility: '',
            created_at: '',
            has_downloads: '',
            forks: '',\
        };
    },

    async mounted() {
        console.log('Params: ', this.$route.query)
        const id = this.$route.query.repoIdn
        await axios.all([
            await axios.get(`${id}`)
        ])
            .then(axios.spread((response1) => {
                console.log(response1.data);
                this.name = response1.data.name
                this.language = response1.data.language
                this.description = response1.data.description
                this.description = response1.data.description
                this.visibility = response1.data.visibility
                this.has_downloads = response1.data.has_downloads
                this.forks = response1.data.forks
                this.created_at = response1.data.created_at.split("T")[0]
                // User Data response is response1

            }))
            .catch(function (error) {
                console.log(error);
            });
    },

    methods: {
        gobackHome() {
            this.$router.push({
                path: `/home`
            });
        },
    }

}
</script>

<style>
.cnt {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;

}

.projecN {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    /* identical to box height */
    margin-bottom: 2rem;
    display: flex;
    align-items: center;

    color: #000000;
}

.abtPrj {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #000000;
    padding-bottom: 0.5rem;
    color: #000000;
}

.btnBack {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 2rem 0;
}

.btnBck {
    background-color: #fff;
    border: none;

    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    display: flex;
    align-items: center;

    color: #000000;
}

.btnStats:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.projct {
    text-align: left;
}

.stats {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
}

.bton {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0%;
}

.btnStats {
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #fff;
    border-radius: 10px;
    margin: 2rem;
    width: 100%;
    height: 60px;
    padding: 0 1rem;
    border: 1px solid grey;
}

.pubStats {

    background-color: #fff;
    border-radius: 5rem;
    margin: 2rem;
    width: 100%;
    height: 60px;
    padding: 0 1rem;
    border: 1px solid grey;
}

.pubStats:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>