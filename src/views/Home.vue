<template>
  <div>
    <checkout />
    <div style="height:45px;"></div>

    <!-- <div class="hm-title">Hollow Mask Maker</div> -->

    <div id="svg-div" v-html="this.mask">

    </div>

    <div style="height:30px;"></div>

    <div class="buttons noselect">
      <div @click="maskGenerateStart()" title="New (N)" class="button">
        New
      </div>
      <div @click="maskExport()" class="button" title="Save as PNG" >
        <span v-if="!avatarGenerating">Save</span>
        <span v-else>Wait...</span>
      </div>
      <div class="button">
        <router-link :to="maskId" title="Unique mask's URL" style="color: #dddddd;text-decoration:none;" target="_blank">
          Link
        </router-link>
      </div>
      <div v-if="!maskEditing" @click="maskEdit()" class="button" title="Shapes editor">
        Edit
      </div>
      <div v-else @click="maskEditEnd()" class="button">
        ✕
      </div>
      <div @click="npOpenModal()" class="button" title="Order a t-shirt">
        Wear
      </div>
    </div>

    <div style="max-width:400px;margin:0 auto;text-align:center;">
      
      <div style="height:40px;"></div>

      <div style="width:60px;margin:0 auto;">
        <div class="social-icon-outer" style="width:23px;">
          <a href="https://github.com/giekaton/hollow-mask" target="_blank">
            <div style="margin-top:-0.5px;" class="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 89.14 87.03">
                <title>GitHub</title>
                <path
                  d="M305.57,356.5a41.07,41.07,0,0,0-13.16,80l0.33,0a0.65,0.65,0,0,0,.4-0.08,0.3,0.3,0,0,0,.07-0.17,0.62,0.62,0,0,0,0-.1c0-1.1,0-1.38,0-1.81,0-1.2,0-2.75,0-4.13-4.7.57-7.87-.17-10-1.38a9.24,9.24,0,0,1-4.27-5.08,18.86,18.86,0,0,0-2-3.41,6.44,6.44,0,0,0-1.63-1.72h0a7.47,7.47,0,0,1-2.35-1.94,2.78,2.78,0,0,1-.57-1.61,2.21,2.21,0,0,1,1.12-2,5,5,0,0,1,2.56-.58,7.77,7.77,0,0,1,4.47,1.39h0a13.15,13.15,0,0,1,3.62,3.81v0a7.24,7.24,0,0,0,4.22,3.55,8.63,8.63,0,0,0,5.19-.37,12.26,12.26,0,0,1,.93-2.82l0.18-.36a23.53,23.53,0,0,1-11.26-4.8c-4.05-3.42-6.79-8.86-6.79-17.64a19,19,0,0,1,1.22-6.84,18.23,18.23,0,0,1,2.94-5.06,15.55,15.55,0,0,1-.6-3.37,18.68,18.68,0,0,1,1.38-8.25l0.31-.78,0.81-.24s4.15-1.29,12.57,4.17A40.41,40.41,0,0,1,300,374a42.19,42.19,0,0,1,11.38,0,40.41,40.41,0,0,1,4.71.92c8.43-5.52,12.56-4.18,12.57-4.17l0.81,0.24,0.31,0.78a18.68,18.68,0,0,1,1.38,8.25,15.57,15.57,0,0,1-.6,3.37,18.15,18.15,0,0,1,2.94,5.05,19,19,0,0,1,1.22,6.84c0,8.82-2.76,14.26-6.82,17.67a23.63,23.63,0,0,1-11.28,4.78,11.14,11.14,0,0,1,.6,1.37,15.27,15.27,0,0,1,.85,5.25c0,2.84,0,6.73,0,9.35,0,0.54,0,1,0,2.43a0.65,0.65,0,0,0,0,.13,0.33,0.33,0,0,0,.08.18,0.55,0.55,0,0,0,.33.07,2.09,2.09,0,0,0,.36,0,41.09,41.09,0,0,0-13.24-80h0Zm-31.52,9.55a44.58,44.58,0,1,1,45.72,73.8l-0.21.06a5.69,5.69,0,0,1-1.11.12,3.88,3.88,0,0,1-2.66-1,3.79,3.79,0,0,1-1.18-2.1,4.16,4.16,0,0,1-.08-0.81c0-.5,0-0.76,0-2.44s0-4.55,0-9.34a11.84,11.84,0,0,0-.63-4.06,6,6,0,0,0-1.65-2.54l-3-2.61,4-.45c4.48-.5,9-1.59,12.41-4.41s5.57-7.38,5.57-15a15.58,15.58,0,0,0-1-5.6,14.89,14.89,0,0,0-2.95-4.74l-0.74-.81,0.41-1a11.1,11.1,0,0,0,.71-3.33,14.91,14.91,0,0,0-.78-5.76c-1.28,0-4.23.62-9.53,4.22l-0.67.46-0.78-.22a36.63,36.63,0,0,0-5-1,39.86,39.86,0,0,0-10.45,0,36.62,36.62,0,0,0-5,1l-0.77.22L294,378.3c-5.31-3.57-8.26-4.18-9.54-4.22a14.9,14.9,0,0,0-.78,5.75,11.1,11.1,0,0,0,.71,3.33l0.41,1-0.74.81a14.92,14.92,0,0,0-2.94,4.74,15.59,15.59,0,0,0-1,5.59c0,7.59,2.24,12.19,5.55,15s7.9,3.92,12.38,4.43l4,0.44-3,2.61a5.65,5.65,0,0,0-1.35,1.85,9.35,9.35,0,0,0-.8,2.79l-0.13,1-0.88.4a12.63,12.63,0,0,1-8.42.9,10.61,10.61,0,0,1-6.26-5.1h0a9.54,9.54,0,0,0-2.59-2.75h0l-0.16-.11a13.61,13.61,0,0,1,1.32,1.58,22.71,22.71,0,0,1,2.4,4.22l0,0.05a5.83,5.83,0,0,0,2.69,3.22c1.84,1,4.84,1.58,9.74.68l2.06-.38v2.1c0,3,0,4.86,0,6.14s0,1.44,0,1.84a4.11,4.11,0,0,1-.06.71,3.75,3.75,0,0,1-1.19,2.18,4,4,0,0,1-2.72,1,5.92,5.92,0,0,1-1-.09l-0.25-.07a44.57,44.57,0,0,1-17.43-73.8h0Z"
                  transform="translate(-261 -353)"
                />
              </svg>
            </div>
          </a>
        </div>

        <div class="social-icon-outer" style="width:23px;float:right;">
          <a href="https://twitter.com/hollowmaskcom" target="_blank">
            <div class="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <title>GitHub</title>
                <path
                  d="M34.2 5.5c-6 0-10.8 4.8-10.8 10.8l.1 1c-7.4-.6-14-4.2-18.4-9.6a1 1 0 0 0-1.6 0 10.8 10.8 0 0 0 .7 12l-.8-.4a1 1 0 0 0-1.5.9v.1c0 3.7 2 6.9 4.8 8.9h-.1a1 1 0 0 0-1.2 1.2c1.2 3.5 4 6.2 7.5 7.1a18.7 18.7 0 0 1-11.8 2.6 1 1 0 0 0-.6 1.8c4.5 2.9 9.8 4.6 15.6 4.6A28 28 0 0 0 37.7 37 30 30 0 0 0 45 17.5v-.9a21 21 0 0 0 4.7-5 1 1 0 0 0-1.2-1.4l-1.7.4c.7-1 1.4-2 1.7-3.1a1 1 0 0 0-1.5-1.2c-1.7 1-3.5 1.8-5.5 2.2-2-1.8-4.5-3-7.4-3zm0 2c2.6 0 4.9 1 6.5 2.8.2.2.6.3 1 .3 1.2-.3 2.5-.7 3.7-1.2-.7 1-1.6 1.8-2.6 2.4a1 1 0 0 0 .7 1.9l2.8-.8a19 19 0 0 1-2.8 2.5 1 1 0 0 0-.4.8v1.3c0 6.2-2.4 13-7 18.2a26 26 0 0 1-20 8.8c-4 0-7.8-.9-11.2-2.4 4.3-.4 8.1-1.9 11.3-4.3a1 1 0 0 0-.6-1.8c-3.3 0-6-2-7.5-4.7h.1c1 0 2-.1 2.9-.4a1 1 0 0 0 0-1.9 8.8 8.8 0 0 1-7-7.2c1.1.3 2.1.6 3.2.6a1 1 0 0 0 .6-1.8A8.9 8.9 0 0 1 4 13.2c0-1.1.3-2.2.7-3.2 5 5.5 12 9.2 19.9 9.6.3 0 .6-.2.8-.4.2-.2.3-.6.2-.9a8.8 8.8 0 0 1 8.6-10.9z"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>

      <div style="clear:both;height:20px;"></div>

      <div class="footer-text">
        Hollow Mask Avatar Maker
        <br>
        Free to Use & Open Source
        <br>
        10 Million Unique Hollow Masks
        <br>
        v0.0.9-beta
      </div>
    </div>

    <div style="height:25px;"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Checkout from "@/views/Checkout.vue";

export default {
  name: "app",
  components: {
    Checkout,
  },
  data: function() {
    return {
      maskGen: '',
      maskIdGen: '',
      maskEditing: false,
      npOpenModal: npOpenModal,
      i: 0,
      avatarGenerating: false,
      maskLink: "",
      color1: "#000000",
      color2: "#000000",
      color3: "#000000",
      mask: "",
      maskId: "",
      svgAnywhere: svgAnywhere,
    }
  },
  
  mounted() {
    document.onkeydown = (evt) => {
      evt = evt || window.event;
      var isN = false;
      if ("key" in evt) {
        isN = (evt.key === "n" || evt.key === "N");
      } else {
        isN = (evt.keyCode === 78);
      }
      if (isN) {
        this.maskGenerateStart();
      }
    };

    // console.log(this.$route.name)
    if (this.$route.name == 'success') {
      this.maskGenerateSingle();
      this.$parent.success = true;
    }
    else if (this.$route.name == 'declined') {
      this.maskGenerateSingle();
      this.$parent.declined = true;
    }
    else if (this.$route.name == 'about') {
      this.maskGenerateSingle();
      this.$parent.openAbout();
    }
    else if (typeof this.$route.params.maskId != "undefined") {
      this.maskId = this.$route.params.maskId;
      this.maskGenerateSingle(this.maskId);
    } 
    else {
      this.maskGenerateSingle();
    }

  },
  methods: {
    maskGenerateStart(string) {
      this.i = 0;
      this.maskEditEnd();
      // let result = this.hollowMask();
      // console.log(result)
      // let self = this;
      if (typeof(string) == 'undefined') {
        this.maskGenerateLoop();
      }
      else {
        this.maskGenerateLoop(string);
      }
    },
    
    maskGenerateLoop(string) {
      setTimeout(() => {
        if (this.i < 10) {
          this.i++;
          // this.maskGenerate();
          let result = '';
          if (typeof(string) == 'undefined') {
            result = hollowMask();
          }
          else {
            result = hollowMask(string);
          }
          this.mask = result.mask;
          this.maskId = result.maskId;

          this.maskGenerateLoop();
          // console.log(self.i);
        }
      }, 10);
    },

    maskGenerateSingle(string) {
      // this.maskGenerate();
      let result = '';
      if (typeof(string) == 'undefined') {
        result = hollowMask();        
        this.mask = result.mask;
        this.maskId = result.maskId;
      }
      else {
        result = hollowMask(string);
        this.mask = result;
      }
    },

    maskExport() {
      this.avatarGenerating = true;
      this.saveSvgAsPng
        .saveSvgAsPng(
          document.getElementById("svg-mask"),
          "hollowmask-" + this.maskId + ".png",
          { scale: 3, width: 400, height: 400, backgroundColor: 'black' }
        )
        .then(e => {
          this.avatarGenerating = false;
        });
    },

    maskEdit() {
      console.log('aaa')
      this.maskEditing = true;
      this.svgAnywhere('svg-mask');
    },
    
    maskEditEnd: function() {
      if (this.maskEditing) {
        let svgGroup = document.getElementById('svg-group');
        svgGroup.parentNode.removeChild(svgGroup);
        let svgWireframe = document.getElementById('svg-wireframe');
        svgWireframe.innerHTML = "";
        this.maskEditing = false;
      }
    }
  },

};
</script>

<style>
.buttons {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  width: 100%;
}

.button {
  box-sizing: border-box;
  color: #dddddd;
  text-decoration: none;
  cursor: pointer;
  border:1px solid grey;
  border-radius:12px;
  background-color:#212121;
  height:35px;
  padding-top: 5px;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent;
}

.button:hover {
  background-color:rgb(45, 45, 45);
}

.button:active {
  color: #dddddd;
}

.button:visited {
  color: #dddddd;
}

.hm-space {
  height: 40px;
}

@media screen and (max-width: 500px) {
  .hm-space {
    height: 80px;
  }
}

.hm-title {
  margin-top: 35px;
  margin-bottom: 15px;
  font-size: 22px;
  letter-spacing: 2px;
  /* color:#c1c1c1; */
  color: #ebebeb;
}

.footer-text {
  clear: both;
  font-size: 13px;
  line-height: 140%;
  color: rgb(158, 158, 158);
}


/* modal */

.np-modal-close {
  position: absolute;
  margin-top: -24px;
  cursor: pointer;
  font-size: 20px;
}

.np-modal-window {
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0, 0.9);
  overflow-x: hidden;
  box-sizing: content-box;
  align-items: center;
}

.np-modal-content {
  position: relative;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 80px;
}

.np-donate {
  color: white;
  font-size:16px;
  font-weight: normal;
  background-color: black;
  border: 1px solid grey;
  border-radius: 5px;
  height: auto;
  padding: 40px 15px 45px 15px;
  width: 430px;
  position: absolute;
  top: 49%;
  left: 50%;
  transform: translate(-50%, -51%);
  text-align: center;
}

.np-donate-btn {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 25px;
  height: 20px;
  cursor: pointer;
}

@media screen and (max-width: 500px) {
  .np-donate {
    width: 80%;
  }
}

.np-donate-input {
  margin-top: 10px;
  margin-bottom: 15px;
  background-color: #2b3845;
  color: white;
  border: 1px solid #a3a3a3;
  padding: 10px;
  font-size: 16px;
  font-family: inherit;
  max-width: 50%;
}

@media screen and (max-width: 460px) {
  .np-donate-input {
    max-width: 70%;
  }
}

@media screen and (max-width: 360px) {
  .np-donate-input {
    max-width: 75%;
  }
}

.np-donate-input {
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
      appearance: textfield;
}
.np-donate-input::-webkit-inner-spin-button, 
.np-donate-input::-webkit-outer-spin-button { 
  -webkit-appearance: none;
}



/* text spinner */

.np-loading {
  display: inline-block;
  overflow: hidden;
  height: 1.3em;
  margin-top: -0.3em;
  line-height: 1.5em;
  vertical-align: text-bottom;
}

.np-loading::after {
  display: inline-table;
  white-space: pre;
  text-align: left;
}

.np-loading::after {
  content: "\A.\A..\A...";
  animation: spin4 2s steps(4) infinite;
}

.np-loading.np-line::after {
  content: "/\A–\A\\\A|";
  text-align: center;
  animation: spin4 1s steps(4) infinite;
}

@keyframes spin1  { to { transform: translateY( -1.5em); } }
@keyframes spin2  { to { transform: translateY( -3.0em); } }
@keyframes spin3  { to { transform: translateY( -4.5em); } }
@keyframes spin4  { to { transform: translateY( -6.0em); } }
@keyframes spin5  { to { transform: translateY( -7.5em); } }
@keyframes spin6  { to { transform: translateY( -9.0em); } }
@keyframes spin7  { to { transform: translateY(-10.5em); } }
@keyframes spin8  { to { transform: translateY(-12.0em); } }
@keyframes spin9  { to { transform: translateY(-13.5em); } }
@keyframes spin10 { to { transform: translateY(-15.0em); } }
@keyframes spin11 { to { transform: translateY(-16.5em); } }
@keyframes spin12 { to { transform: translateY(-18.0em); } }


/* custom scrollbar */

.np-modal-window::-webkit-scrollbar {
  width: 5px;
}

.np-modal-window::-webkit-scrollbar-track {
  background: #00000000; 
}

.np-modal-window::-webkit-scrollbar-thumb {
  background: #777777; 
}

.np-modal-window::-webkit-scrollbar-thumb:hover {
  background: #888888; 
}
</style>
