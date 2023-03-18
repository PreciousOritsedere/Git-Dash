<template>
    <div style="margin-bottom: 10px;" class="container-fluid">
        <div class="row">
            <div class="col-lg-4">
                <div class="imageCnt">
                    <img :src=avatar_image alt="" width="100%">
                    <div class="nameTxt">
                        <h5 class="firstN">{{ name }}</h5>
                        <p class="otherN">Blessing</p>
                        <p class="otherN">{{ bio }}</p>
                    </div>
                    <div class="emailTxt">
                        <span style="margin-right: 1rem;"><i class="far fa-envelope"></i></span>
                        <p>@gmail.com</p>
                    </div>
                    <div class="emailTxt">
                        <span style="margin-right: 1rem;"><i class="fas fa-map-marker-alt"></i></span>
                        <p>{{ location }}</p>
                    </div>
                    <div class="follower">
                        <div class="number">
                            <p class="numberP">Follower</p>
                            <p class="numberP">{{ followers }}</p>
                        </div>
                        <div>
                            <span style="color: #57FBDA; font-size: 28px;"><i class="fas fa-map-marker-alt"></i></span>
                        </div>
                    </div>
                    <div class="gist">
                        <div class="number">
                            <p class="numberP">Gist</p>
                            <p class="numberP">{{ public_gists }}</p>
                        </div>
                        <div>
                            <span style="color: #008397; font-size: 28px;"><i class="fas fa-pen"></i></span>
                        </div>
                    </div>
                    <div class="repo">
                        <div class="number">
                            <p class="numberP">Public Repo</p>
                            <p class="numberP">{{ public_repos }}</p>
                        </div>
                        <div>
                            <span style="color: #980000; font-size: 28px;"><i class="far fa-file-alt"></i></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-8">
                <div class="container-fluid">
                    <div id="carouselExampleIndicators" class="carousel slide">
                        <!-- <div class="carousel-indicators">
                            <button style="color: black;" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button style="color: black;" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button style="color: black;" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                        </div> -->
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div @click="gotoRepoone" class="repoCntainer">
                                            <div style="background-color: #E6F3F7;" class="usersPage">
                                                <div class="userDiv">
                                                    <h5 class="userspageTxt">{{ firstRepoName }}</h5>
                                                    <span style="color: #D33367;"><i
                                                            class="fas fa-external-link-alt"></i></span>
                                                </div>
                                                <p class="usersparagraph">{{ firstRepodescrip }}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div @click="gotoRepotwo" class="repoCntainer">
                                            <div style="background-color: #FFFADE;" class="usersPage">
                                                <div class="userDiv">
                                                    <h5 class="userspageTxt">{{ secondRepoName }}</h5>
                                                    <span style="color: #D33367;"><i
                                                            class="fas fa-external-link-alt"></i></span>
                                                </div>
                                                <p class="usersparagraph">{{ secondRepodescrip }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div @click="gotoRepo3" class="repoCntainer">
                                            <div style="background-color: #E8D5B5;" class="usersPage">
                                                <div class="userDiv">
                                                    <h5 class="userspageTxt">{{ thirdRepoName }}</h5>
                                                    <span style="color: #D33367;"><i
                                                            class="fas fa-external-link-alt"></i></span>
                                                </div>
                                                <p class="usersparagraph">{{ thirdRepodescrip }}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div @click="gotoRepo4" class="repoCntainer">
                                            <div style="background-color: #C6FCED;" class="usersPage">
                                                <div class="userDiv">
                                                    <h5 class="userspageTxt">{{ fouthRepoName }}</h5>
                                                    <span style="color: #D33367;"><i
                                                            class="fas fa-external-link-alt"></i></span>
                                                </div>
                                                <p class="usersparagraph">{{ fouthRepodescrip }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div @click="gotoRepo5" class="repoCntainer">
                                            <div style="background-color: #F7EBFF;" class="usersPage">
                                                <div class="userDiv">
                                                    <h5 class="userspageTxt">{{ fiveRepoName }}</h5>
                                                    <span style="color: #D33367;"><i
                                                            class="fas fa-external-link-alt"></i></span>
                                                </div>
                                                <p class="usersparagraph">{{ fiveRepodescrip }}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div @click="gotoRepo6" class="repoCntainer">
                                            <div style="background-color: #FFFADE;" class="usersPage">
                                                <div class="userDiv">
                                                    <h5 class="userspageTxt">{{ sixRepoName }}</h5>
                                                    <span style="color: #E6F3F7;"><i
                                                            class="fas fa-external-link-alt"></i></span>
                                                </div>
                                                <p class="usersparagraph">{{ sixRepodescrip }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div @click="gotoRepo7" class="repoCntainer">
                                            <div style="background-color: #E6F3F7;" class="usersPage">
                                                <div class="userDiv">
                                                    <h5 class="userspageTxt">{{ sevenRepoName }}</h5>
                                                    <span style="color: #D33367;"><i
                                                            class="fas fa-external-link-alt"></i></span>
                                                </div>
                                                <p class="usersparagraph">{{ sevenRepodescrip }}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div @click="gotoRepo8" class="repoCntainer">
                                            <div style="background-color: #FFFADE;" class="usersPage">
                                                <div class="userDiv">
                                                    <h5 class="userspageTxt">{{ eightRepoName }}</h5>
                                                    <span style="color: #D33367;"><i
                                                            class="fas fa-external-link-alt"></i></span>
                                                </div>
                                                <p class="usersparagraph">{{ eightRepodescrip }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div @click="gotoRepo9" class="repoCntainer">
                                            <div style="background-color: #E6F3F7;" class="usersPage">
                                                <div class="userDiv">
                                                    <h5 class="userspageTxt">{{ nineRepoName }}</h5>
                                                    <span style="color: #D33367;"><i
                                                            class="fas fa-external-link-alt"></i></span>
                                                </div>
                                                <p class="usersparagraph">{{ nineRepodescrip }}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div @click="gotoRepo10" class="repoCntainer">
                                            <div style="background-color: #FFFADE;" class="usersPage">
                                                <div class="userDiv">
                                                    <h5 class="userspageTxt">{{ tenRepoName }}</h5>
                                                    <span style="color: #D33367;"><i
                                                            class="fas fa-external-link-alt"></i></span>
                                                </div>
                                                <p class="usersparagraph">{{ tenRepodescrip }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div @click="gotoRepo11" class="repoCntainer">
                                            <div style="background-color: #E6F3F7;" class="usersPage">
                                                <div class="userDiv">
                                                    <h5 class="userspageTxt">{{ elevenRepoName }}</h5>
                                                    <span style="color: #D33367;"><i
                                                            class="fas fa-external-link-alt"></i></span>
                                                </div>
                                                <p class="usersparagraph">{{ elevenRepodescrip }}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div @click="gotoRepo12" style="background-color: #FFFADE;" class="usersPage">
                                            <div class="userDiv">
                                                <h5 class="userspageTxt">{{ twlRepoName }}</h5>
                                                <span style="color: #D33367;"><i
                                                        class="fas fa-external-link-alt"></i></span>
                                            </div>
                                            <p class="usersparagraph">{{ twlRepodescrip }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="carousel-item">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div @click="gotoRepo13" style="background-color: #E6F3F7;" class="usersPage">
                                            <div class="userDiv">
                                                <h5 class="userspageTxt">{{ thirRepoName }}</h5>
                                                <span style="color: #D33367;"><i
                                                        class="fas fa-external-link-alt"></i></span>
                                            </div>
                                            <p class="usersparagraph">{{ thirRepodescrip }}</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div style="background-color: #FFFADE;" class="usersPage">
                                            <div class="userDiv">
                                                <h5 class="userspageTxt">{{ fourRepoName }}</h5>
                                                <span style="color: #D33367;"><i
                                                        class="fas fa-external-link-alt"></i></span>
                                            </div>
                                            <p class="usersparagraph">{{ fourRepodescrip }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div style="background-color: #E6F3F7;" class="usersPage">
                                            <div class="userDiv">
                                                <h5 class="userspageTxt">{{ thirRepoName }}</h5>
                                                <span style="color: #D33367;"><i
                                                        class="fas fa-external-link-alt"></i></span>
                                            </div>
                                            <p class="usersparagraph">{{ thirRepodescrip }}</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div style="background-color: #FFFADE;" class="usersPage">
                                            <div class="userDiv">
                                                <h5 class="userspageTxt">{{ fourRepoName }}</h5>
                                                <span style="color: #D33367;"><i
                                                        class="fas fa-external-link-alt"></i></span>
                                            </div>
                                            <p class="usersparagraph">{{ fourRepodescrip }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div style="background-color: #E6F3F7;" class="usersPage">
                                            <div class="userDiv">
                                                <h5 class="userspageTxt">{{ thirRepoName }}</h5>
                                                <span style="color: #D33367;"><i
                                                        class="fas fa-external-link-alt"></i></span>
                                            </div>
                                            <p class="usersparagraph">{{ thirRepodescrip }}</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div style="background-color: #FFFADE;" class="usersPage">
                                            <div class="userDiv">
                                                <h5 class="userspageTxt">{{ fourRepoName }}</h5>
                                                <span style="color: #D33367;"><i
                                                        class="fas fa-external-link-alt"></i></span>
                                            </div>
                                            <p class="usersparagraph">{{ fourRepodescrip }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                        </div>
                    </div>
                    <div style="margin-top: 2rem;">
                        <button data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" class="buttonPrev"><span
                                style="margin-right: 1.5rem;"><i class="fas fa-chevron-left"></i></span> Previous</button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            class="buttonSlide active" aria-current="true" aria-label="Slide 1">1</button>
                        <button class="buttonSlide" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="1" aria-label="Slide 2">2</button>
                        <!-- <button class="buttonSlide" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="2" aria-label="Slide 3">3</button> -->
                        <button data-bs-target="#carouselExampleIndicators" data-bs-slide="next" class="buttonNext">Next
                            <span style="margin-left: 1.5rem;"><i class="fas fa-chevron-right"></i></span> </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"

export default {
    data: () => ({
        avatar_image: '',
        followers: '',
        bio: '',
        location: '',
        name: '',
        public_gists: '',
        public_repos: '',
        firstRepoName: '',
        firstRepodescrip: '',
        secondRepoName: '',
        secondRepodescrip: '',
        thirdRepoName: '',
        thirdRepodescrip: '',
        fouthRepoName: '',
        fouthRepodescrip: '',
        fiveRepoName: '',
        fiveRepodescrip: '',
        sixRepoName: '',
        sixRepodescrip: '',
        sevenRepoName: '',
        sevenRepodescrip: '',
        eightRepoName: '',
        eightRepodescrip: '',
        nineRepoName: '',
        nineRepodescrip: '',
        tenRepoName: '',
        tenRepodescrip: '',
        elevenRepoName: '',
        elevenRepodescrip: '',
        twlRepoName: '',
        twlRepodescrip: '',
        thirRepoName: '',
        thirRepodescrip: '',
        fourRepoName: '',
        fourRepodescrip: '',
        url: '',
        url2: '',
        url3: '',
        url4: '',
        url5: '',
        url6: '',
        url7: '',
        url8: '',
        url9: '',
        url10: '',
        url11: '',
        url12: '',
    }),
    // async beforeMount() {


    // },

    mounted() {
        this.Userdata()
    },
    methods: {
        gotoRepo() {
            const repoIdn = this.url
            this.$router.push({
                path: `/repo`, query: { repoIdn }
            });
        },
        gotoRepoone() {
            const repoIdn = this.url
            this.$router.push({
                path: `/repo`, query: { repoIdn }
            });
        },
        gotoRepotwo() {
            const repoIdn = this.url2
            this.$router.push({
                path: `/repo`, query: { repoIdn }
            });
        },
        gotoRepo3() {
            const repoIdn = this.url3
            this.$router.push({
                path: `/repo`, query: { repoIdn }
            });
        },
        gotoRepo4() {
            const repoIdn = this.url4
            this.$router.push({
                path: `/repo`, query: { repoIdn }
            });
        },
        gotoRepo5() {
            const repoIdn = this.url5
            this.$router.push({
                path: `/repo`, query: { repoIdn }
            });
        },
        gotoRepo6() {
            const repoIdn = this.url6
            this.$router.push({
                path: `/repo`, query: { repoIdn }
            });
        },
        gotoRepo7() {
            const repoIdn = this.url7
            this.$router.push({
                path: `/repo`, query: { repoIdn }
            });
        },
        gotoRepo8() {
            const repoIdn = this.url8
            this.$router.push({
                path: `/repo`, query: { repoIdn }
            });
        },
        gotoRepo9() {
            const repoIdn = this.url9
            this.$router.push({
                path: `/repo`, query: { repoIdn }
            });
        },
        gotoRepo10() {
            const repoIdn = this.url10
            this.$router.push({
                path: `/repo`, query: { repoIdn }
            });
        },
        gotoRepo11() {
            const repoIdn = this.url11
            this.$router.push({
                path: `/repo`, query: { repoIdn }
            });
        },
        gotoRepo12() {
            const repoIdn = this.url12
            this.$router.push({
                path: `/repo`, query: { repoIdn }
            });
        },
        // gotoRepo13() {
        //     const repoIdn = this.url13
        //     this.$router.push({
        //         path: `/repo`, query: { repoIdn }
        //     });
        // },
        async Userdata() {
            await axios.all([
                await axios.get(`https://api.github.com/users/PreciousOritsedere`),
                await axios.get(`https://api.github.com/users/PreciousOritsedere/repos`)
            ])
                .then(axios.spread((response1, response2) => {
                    console.log(response1);
                    // User Data response is response1
                    const item = response1.data

                    // The Repos Response is response2
                    const reposItem = response2.data[0]
                    const secondreposItem = response2.data[1]
                    const thirdreposItem = response2.data[2]
                    const fouthreposItem = response2.data[3]
                    const fivereposItem = response2.data[4]
                    const sixreposItem = response2.data[5]
                    const sevenreposItem = response2.data[6]
                    const eightreposItem = response2.data[7]
                    const ninereposItem = response2.data[8]
                    const tenreposItem = response2.data[9]
                    const elreposItem = response2.data[10]
                    const twelreposItem = response2.data[11]
                    const thirreposItem = response2.data[12]
                    const fourreposItem = response2.data[13]

                    this.avatar_image = item.avatar_url
                    this.followers = item.followers
                    this.bio = item.bio
                    this.location = item.location
                    this.name = item.name
                    this.public_gists = item.public_gists
                    this.public_repos = item.public_repos

                    // Repo
                    this.url = reposItem.url
                    this.firstRepoName = reposItem.name
                    this.firstRepodescrip = reposItem.description
                    // Repo
                    // this.repoId = secondreposItem.id
                    this.url2 = secondreposItem.url
                    this.secondRepoName = secondreposItem.name
                    this.secondRepoName = secondreposItem.name
                    this.secondRepodescrip = secondreposItem.description
                    // Repo
                    this.url3 = thirdreposItem.url
                    this.thirdRepoName = thirdreposItem.name
                    this.thirdRepodescrip = thirdreposItem.description
                    // Repo
                    this.url4 = fouthreposItem.url
                    this.fouthRepoName = fouthreposItem.name
                    this.fouthRepodescrip = fouthreposItem.description
                    // Repo
                    this.url5 = fivereposItem.url
                    this.fiveRepoName = fivereposItem.name
                    this.fiveRepodescrip = fivereposItem.description
                    // Repo
                    this.url6 = sixreposItem.url
                    this.sixRepoName = sixreposItem.name
                    this.sixRepodescrip = sixreposItem.description
                    // Repo
                    this.url7 = sevenreposItem.url
                    this.sevenRepoName = sevenreposItem.name
                    this.sevenRepodescrip = sevenreposItem.description
                    // Repo
                    this.url8 = eightreposItem.url
                    this.eightRepoName = eightreposItem.name
                    this.eightRepodescrip = eightreposItem.description
                    // Repo
                    this.url9 = ninereposItem.url
                    this.nineRepoName = ninereposItem.name
                    this.nineRepodescrip = ninereposItem.description
                    // Repo
                    this.url10 = tenreposItem.url
                    this.tenRepoName = tenreposItem.name
                    this.tenRepodescrip = tenreposItem.description
                    // Repo
                    this.url11 = elreposItem.url
                    this.elevenRepoName = elreposItem.name
                    this.elevenRepodescrip = elreposItem.description
                    // Repo
                    this.url12 = twelreposItem.url
                    this.twlRepoName = twelreposItem.name
                    this.twlRepodescrip = twelreposItem.description
                    // Repo
                    this.url13 = thirreposItem.url
                    this.thirRepoName = thirreposItem.name
                    this.thirRepodescrip = thirreposItem.description
                    // Repo
                    this.url14 = fourreposItem.url
                    this.fourRepoName = fourreposItem.name
                    this.fourRepodescrip = fourreposItem.description

                }))
                .catch(function (error) {
                    console.log(error);
                });
        },
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap');

.numberP {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #1F197A;
    margin: 0%;
    padding: 0%;
}

.buttonSlide {
    border: 2px solid #0049A7;
    border-radius: 50%;
    background-color: #fff;
    width: 3rem;
    height: 3rem;
    margin-left: 1rem;
    color: #0049A7;
}

.buttonPrev {
    border: none;
    background-color: #fff;
    margin-left: 1rem;
    color: #0049A7;
}

.usersPage:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.repoCntainer {
    cursor: pointer;
}

.buttonNext {
    border: none;
    background-color: #fff;
    margin-left: 1rem;
    color: #0049A7;
}

.buttonSlide:hover {
    background-color: #0049A7;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    margin-left: 1rem;

    color: #fff;
}

.imageCnt {
    border: 2px solid #6E0000;
    border-radius: 10px;
    padding: 2rem;
}

.nameTxt {
    margin-left: 2rem;
    margin-top: 2rem;
}

.firstN {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    text-align: left;

    color: #1F197A;
}

.otherN {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: left;

    color: #202120;
}

.emailTxt {
    margin-left: 2rem;
    display: flex;
    flex-direction: row;
}

.follower {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 20px;
    width: 100%;
    text-align: left;
    background: #FFFADE;
    border-radius: 8px;
}

.gist {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 20px;
    width: 100%;
    text-align: left;
    background: #E8D5B5;
    border-radius: 8px;
}

.repo {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 20px;
    width: 100%;
    text-align: left;
    background: #ECCBFF;
    border-radius: 8px;
}

.usersPage {
    padding: 2rem;
    width: 100%;
    height: 220px;
    /* background: #E6F3F7; */
    border-radius: 8px;
    text-align: left;
    margin-top: 1.5rem;
}

.userDiv {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
}

.userspageTxt {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;

    color: #1F197A;
}

.usersparagraph {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;

    color: #1F197A;
}
</style>