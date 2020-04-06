<template>

  <div >
    <div v-if="success" class="np-modal-window" style="position:absolute;color:white;text-align:center;line-height:180%;display:block;background-color: rgba(0,0,0, 0.9);">
      <div style="max-width:500px;padding:15px;margin:0 auto;">
        <div style="height:130px;"></div>
        Successful payment. Thank you for shopping.
        <br>
        <br>
        <span @click="closePS()" style="color:#999999;text-decoration:underline;cursor:pointer;">Close</span>
      </div>
    </div>

    <div v-if="declined" class="np-modal-window" style="position:absolute;color:white;text-align:center;line-height:180%;display:block;background-color: rgba(0,0,0, 0.9);">
      <div style="max-width:500px;padding:15px;margin:0 auto;">
        <div style="height:130px;"></div>
        Your payment was declined. Please double check the data you have entered or try another card.
        <br>
        <br>
        <span @click="closePD()" style="color:#999999;text-decoration:underline;cursor:pointer;">Close</span>
      </div>
    </div>

    <div class="btn-about link" @click="openAbout()" title="About">
        ?
    </div>

    <div v-if="showAbout" id="hm-modal" class="np-modal-window" style="display:block;position:absolute;color:white;text-align:center;line-height:180%;">
      <div style="max-width:620px;padding:10px;margin:0 auto;font-size:15.5">

        <h1>About</h1>

        The Hollow Mask Maker is a tool that allows you to generate and customize unique mask-based avatars.
        <br><br>
        In total, you can generate 4,782,969 unique masks. Use any of them as an avatar, as a social profile picture, or order a black t-shirt with the selected/modified mask.
        <br><br>
        Each generated avatar is free for your personal or commercial use. Where possible, you can mention the hollowmask.com website.

        <h1>Hollow Mask origins</h1>

        Hollow Mask's origins lie at the fundamental nature of reality, which is emptiness. This emptiness can be scary, even terrifying. It's a place where we lose our everyday roles and see the reality without subjective stories we tell ourselves and others. This existential emptiness requires our acknowledgment and acceptance. It can then be transformed into something meaningful and positive.
        <br><br>
        <i style="font-size:14px;">
        "Paradox as it may seem, we likewise find life meaningful only when we have seen that it is without purpose, and know the ‘mystery of the universe’ only when we are convinced that we know nothing about it at all."
        <br>
        – Alan W. Watts, The Wisdom of Insecurity
        </i>
        <br><br>
        Different artists, from different centuries and places, universally acknowledge the existence of this existential emptiness. Probably the strongest imagery we all know is The Scream, a painting created by Norwegian Expressionist artist Edvard Munch in 1893. The same screaming expression has also influenced the modern Ghostface mask, and now, on our mobile devices, we all have the emojicon representing The Scream, which is both cute and terrifying at the same time.
        <br><br>
        Inspired by the Marvel's The Punisher t-shirts, Hollow Mask also has a t-shirt store, where you can order cool black t-shirts with high quality Hollow Mask prints.
        <br><br>
        On the technical side, Hollow Mask is a unique and experimental open-source design/engineering project. Using initially designed graphical shapes, the special algorithm automatically generates more than 4 million mask combinations. Additional tools, such as vector editing in the browser, are already live in their early beta stage.

        <h1>Contacts</h1>

        h&#105;&#64;&#x68;&#x6f;&#x6c;l&#111;&#119;&#x6d;&#x61;&#x73;k&#46;&#99;&#x6f;&#x6d;
        <div style="height:8px;"></div>
        <a href="https://twitter.com/hollowmaskcom" target="_blank" class="text-link">Twitter</a>&nbsp;&nbsp;&nbsp;<a href="https://github.com/giekaton/hollow-mask" target="_blank" class="text-link">GitHub</a>
        <br>
        <br><br>
        <span @click="closeAbout()" class="text-link">Close</span>
        <div style="height:60px;"></div>


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
    closePS: function() {
      this.success = false; 
      this.$router.push({ name: 'home'});
    },
    closePD: function() {
      this.declined = false; 
      this.$router.push({ name: 'home'});
    },
    leaderboard: function() {
      // console.log('eee');
    },
    
  }
}
</script>

<style>
  h1 {
    font-size: 22px;
    font-weight: bold;
    margin-top: 60px;
    margin-bottom: 30px;
  }

  .text-link {
    color:#999999;
    text-decoration:underline;
    cursor:pointer;
  }

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
