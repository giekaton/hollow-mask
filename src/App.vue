<template>

  <div >
    <div v-if="success" class="np-modal-window" style="position:absolute;color:white;text-align:center;line-height:180%;display:block;background-color: rgba(0,0,0, 0.9);">
      <div style="max-width:500px;padding:15px;margin:0 auto;">
        <div style="height:130px;"></div>
        Successful payment. Thank you for shopping.
        <br>
        <br>
        <span @click="success = false" style="color:#999999;text-decoration:underline;cursor:pointer;">Close</span>
      </div>
    </div>

    <div v-if="declined" class="np-modal-window" style="position:absolute;color:white;text-align:center;line-height:180%;display:block;background-color: rgba(0,0,0, 0.9);">
      <div style="max-width:500px;padding:15px;margin:0 auto;">
        <div style="height:130px;"></div>
        Your payment was declined. Please double check the data you have entered or try another card.
        <br>
        <br>
        <span @click="declined = false" style="color:#999999;text-decoration:underline;cursor:pointer;">Close</span>
      </div>
    </div>

    <div class="btn-about link" @click="openAbout()" title="About">
        ?
    </div>

    <div v-if="showAbout" id="hm-modal" class="np-modal-window" style="display:block;position:absolute;color:white;text-align:center;line-height:180%;">
      <div style="max-width:620px;padding:15px;margin:0 auto;">
        <br><br>
        <!-- <span style="color:#999;">WARNING: Early beta version. Design is unpolished and will look much better in the first public release.</span>
        <br><br> -->
        <b>About</b>
        <br><br>
        Hollow Mask is an art + engineering project that also has a t-shirt store.
        <br><br>
        At Hollow Mask, you can generate more than 4 million unique masks, modify them and then save as an avatar, or order a t-shirt with the selected/modified mask.
        <br><br>
        Similar black t-shirts with white masks are popular all around the world, e.g. Marvel's The Punisher t-shirts, different t-shirts with skull symbolism and so on.
        <br><br>
        Hollow Mask's origins lie at the fundamental nature of reality, which is emptiness. Not necessarily horrifying, as in Edvard Munch's "The Scream", but it requires acknowledgment and acceptance. It can then be transformed into something positive and meaningful.
        <br><br>
        <i style="font-size:14px;">
        "Paradox as it may seem, we likewise find life meaningful only when we have seen that it is without purpose, and know the ‘mystery of the universe’ only when we are convinced that we know nothing about it at all.''
        <br>
        The Wisdom of Insecurity: A Message for an Age of Anxiety, Alan W. Watts
        </i>
        <br><br>
        Hollow Mask is also a unique and experimental software project. Using initially designed graphical shapes, it automatically generates more than 4 million mask combinations. Additional tools, such as vector editing in the browser, are already live in their early beta stage.
        <br><br>
        <span @click="closeAbout()" style="color:#999999;text-decoration:underline;cursor:pointer;">Close</span>
        <div style="height:60px;"></div>
        <div class="np-top-owners" v-html="masksHtml"></div>

        <span @click="closeAbout()">
          <div class="btn-about-close">✕</div>
        </span>
      </div>
    </div>

    <div id="app" style="max-width:400px;margin:0 auto;text-align: center;">
      <router-view/>
    </div>
  
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      hmModal: false,
      hmShoppingCart: false,
      hmWatchList: false,
      ownersHtml: '',
      masksHtml: '',
      showAbout: '',
      declined: false,
      success: false
    }
  },
  methods: {
    openAbout: function() {
      this.showAbout = true;
      document.getElementsByTagName("BODY")[0].style.overflowY = 'hidden';
      this.$router.push({ name: 'about'});
    },
    closeAbout: function() {
      this.showAbout = false;
      document.getElementsByTagName("BODY")[0].style.overflowY = 'auto';
      this.$router.push({ name: 'home'});
    },
    leaderboard: function() {
      // console.log('eee');
    },
    
  }
}
</script>

<style>

  .np-btn {
    background-color: #e4e4e4!important;
  }

  .np-svg-link:hover svg {
     fill: rgb(202, 161, 57);
  }

  body {
    background-color: black;
    
    font-family: 'Noto Sans', 'Arial', 'Helvetica', sans-serif;
    /* font-family: 'Work Sans', 'Arial', 'Helvetica', sans-serif; */
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .noselect {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
  }

  #svg-div {
    max-width: 400px;
    max-height: 400px;
    margin: 0 auto;
  }

  .link {
    color: #dddddd;
    /* color: #488694; */
    text-decoration: none;
    cursor: pointer;
    padding:9px;
    padding-top:6px;
    padding-bottom:6px;
    border:1px solid grey;
    border-radius:12px;
    background-color:#212121;
    width: 100%;
    display: inline-block;
    margin-top: 15px;
    height:21px;
    overflow-y:hidden;
  }

  .link:hover {
    background-color:rgb(45, 45, 45);
  }

  .link:active {
    color: #dddddd;
  }

  .link:visited {
    color: #dddddd;
  }

  .social-icon-outer {
    float:left;
    width:30px;
  }

  .social-icon {
    fill:rgb(138, 138, 138);
  }

  .social-icon:hover path {
    fill: rgb(168, 168, 168);
  }


  /* custom scrollbar */

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #00000000; 
  }

  ::-webkit-scrollbar-thumb {
    background: #777777; 
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #888888; 
  }

  .np-modal-window {
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    overflow-x: hidden;
    box-sizing: content-box;
    align-items: center;
  }

  .btn-about {
    position:absolute;
    right:25px;
    top:8px;
    width:35px;
    height:35px;
    border-radius:50%;
    text-align:center;
    box-sizing:border-box;
    font-weight:bold;
    font-size:17px;
    padding-top:5px;
  }

  .btn-about-close {
    position:absolute;
    font-size:22px;
    top:29px;
    right:33px;
    color:#d1d1d1;
    cursor:pointer;
  }

  @media screen and (max-width: 600px) {
    .btn-about {
      right:11px;
      top: -2px;
      width:33px;
      height:33px;
      padding-top:2.5px;
    }
    .btn-about-close {
      top: 14px;
      right: 16px;
    }
  }
</style>
