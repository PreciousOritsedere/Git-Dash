<template>
    <div>
        <div class="navbar">
            <div style="padding-left: 10px;">
                <h5 class="h5">Git Dash</h5>
            </div>
            <div class="menu">
                <ul>
                    <li><button>Home</button></li>
                    <li><button>About</button></li>
                    <li><button>Boundary</button></li>
                </ul>
            </div>
        </div>
        <div class="contentContainer">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@200&display=swap');

.navbar {
    z-index: 1000;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* padding: 10px; */
    width: 100%;
    height: 56px;
    position: fixed;
    background: #1F197A;
}

.contentContainer {
    padding-top: 5rem;
}

button {
    background-color: #1F197A;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 23px;
    color: #F7EBFF;
    border: none;
}

@media (max-width: 800px) {
    .navbar {
        z-index: 1000;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        /* padding: 10px; */
        width: 100%;
        height: auto;
        position: fixed;
        background: #1F197A;
    }

    ul {
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    li {
        font-family: 'Work Sans';
        font-style: normal;
        font-weight: 800;
        font-size: 20px;
        line-height: 23px;
        color: #F7EBFF;
        margin: 0 1rem;
    }

    .contentContainer {
        padding-top: 8rem;
    }
}

.h5 {
    font-family: 'Dancing Script';
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 48px;

    color: #F7EBFF;
}

ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

li {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 23px;
    color: #F7EBFF;
    margin: 0 1rem;
}
</style>