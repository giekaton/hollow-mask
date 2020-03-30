<template>
<div class="np-modal-window" id="np-modal">
      <div class="np-modal-content" >
        <div id="np-wallet" class="np-wallet">
            <div onclick="npCloseModal()" class="np-modal-close" style="margin-top:0px;">✕</div>

            <div style="height:10px;"></div>
            
            <div style="font-size:22px;font-weight:bold;">Hollow Mask T-Shirt</div>
          

            <div style="height:30px;"></div>

            <div style="max-width:360px;margin:0 auto;">
              <div id="hm-svg-tshirt" class="mockup-tshirt"></div>
              <img src="img/hm-mockup.jpg" style="width:100%;border-radius:5px;">
            </div>

            <div style="height:30px;"></div>
            
            <div class="chekout-product-data">
              Size: <select id="product-size" ><option>S</option><option>M</option><option selected>L</option><option>XL</option><option>XXL</option></select>
              &nbsp;&nbsp;
              Color: Black
            </div>

            <div style="height:25px;"></div>

            <div class="chekout-product-data">Price: 22 USD + 8 USD Shipping</div>

            <div style="height:30px;"></div>

            <div class="expandable">
              <div class="expandable-link" onclick="divShow('product-details-content')" style="height:25px;">
                  Product details
              </div>
              <div id="product-details-content" class="expandable-details">
                The Gildan 64000 makes for a great staple t-shirt that compliments any outfit. 
                <br><br>
                It's made of a heavier cotton and the double-stitched neckline and sleeves give it more durability, so it can become an everyday favorite.
                <br><br>
                • 100% ring-spun cotton
                <br>
                • Fabric weight: 4.5 oz/y² (153 g/m²)
                <br>
                • Pre-shrunk for extra durability
                <br>
                • Shoulder-to-shoulder taping
                <br>
                • Quarter-turned to avoid crease down the center
                <br>
                <br>
                The male model is wearing a size M. He's 6.2 feet (190 cm) tall, chest circumference 37.7" (96 cm), waist circumference 33.4" (85 cm). 
                <br>
                <br>
                The product is suitable for both men and women (unisex).
                <br>
                <br>
                This product is made on demand.
                <br>
                <br><br>
                <b>Size guide</b>
                <br><br>
                US sizes (In)
                <br>
                S	M	L	XL	2XL	3XL
                <br>
                Length	28	29 ¼	30 ¼	31 ¼	32 ½	33 ½
                <br>
                Width	18	20	22	24	26	28
                <br><br>
                Metric sizes (Cm)
                <br>S	M	L	XL	2XL	3XL
                <br>Length	71	74	77	79	83	85
                <br>Width	46	51	56	61	66	71
                <br>
                <br>
                <div style="text-align:center;" onclick="divHide('product-details-content')"><span style="border-bottom:1px solid grey;cursor:pointer;">Close</span></div>
              </div>
            </div>

            <div class="expandable">
              <div class="expandable-link" onclick="divShow('terms-content')" style="height:25px;">
                Terms and Contitions
            </div>
            <div id="terms-content" class="expandable-details">
              General terms and conditions
              <br><br>
              • The product is made on demand in partnership with Printful.
              <br>
              • Average delivery time (including production) is 10 days.
              <br>
              • Since every product is made on an individual demand, we cannod and do not accept returns.
              <br>
              • If the product was broken or in any other way not as described on this page, we will change your order with the new one, free of charge.
              <br>
              • You can pay using a bank card (Stripe) or cryptocurrency (Coinbase).
              <br>
              • Standard worldwide shipping price is 8.00 USD.
              <br>
              <br>
              <div style="text-align:center;" onclick="divHide('terms-content')"><span style="border-bottom:1px solid grey;cursor:pointer;">Close</span></div>
            </div>
            </div>
            <div style="height:25px;"></div>



        <!--           -->
        <!-- CHECKOUT  -->
        <!--           -->
        <h3>Checkout</h3>

        <div style="height:10px;"></div>

        <div style="text-align:center;">

          <div class="checkout-component">

              <div class="checkout-component-heading">
                Shipping details and contacts
              </div>

              <div style="padding:10px;padding-top:24px;padding-bottom:20px;">
              <input type="text" class="input-basic" id="shippingNameSurname" placeholder="First and last name">
              <br>
              <input type="text" class="input-basic" id="shippingAddressLine1" placeholder="Address line 1">
              <br>
              <input type="text" class="input-basic" id="shippingAddressLine2" placeholder="Address line 2">
              <br>
              <select id="shippingCountry" class="input-basic input-country" style="height:36px;">
                <option disabled selected value>Country</option><option value="AF">Afghanistan</option><option value="AX">Åland Islands</option><option value="AL">Albania</option><option value="DZ">Algeria</option><option value="AS">American Samoa</option><option value="AD">Andorra</option><option value="AO">Angola</option><option value="AI">Anguilla</option><option value="AQ">Antarctica</option><option value="AG">Antigua and Barbuda</option><option value="AR">Argentina</option><option value="AM">Armenia</option><option value="AW">Aruba</option><option value="AU">Australia</option><option value="AT">Austria</option><option value="AZ">Azerbaijan</option><option value="BS">Bahamas</option><option value="BH">Bahrain</option><option value="BD">Bangladesh</option><option value="BB">Barbados</option><option value="BY">Belarus</option><option value="BE">Belgium</option><option value="BZ">Belize</option><option value="BJ">Benin</option><option value="BM">Bermuda</option><option value="BT">Bhutan</option><option value="BO">Bolivia, Plurinational State of</option><option value="BQ">Bonaire, Sint Eustatius and Saba</option><option value="BA">Bosnia and Herzegovina</option><option value="BW">Botswana</option><option value="BV">Bouvet Island</option><option value="BR">Brazil</option><option value="IO">British Indian Ocean Territory</option><option value="BN">Brunei Darussalam</option><option value="BG">Bulgaria</option><option value="BF">Burkina Faso</option><option value="BI">Burundi</option><option value="KH">Cambodia</option><option value="CM">Cameroon</option><option value="CA">Canada</option><option value="CV">Cape Verde</option><option value="KY">Cayman Islands</option><option value="CF">Central African Republic</option><option value="TD">Chad</option><option value="CL">Chile</option><option value="CN">China</option><option value="CX">Christmas Island</option><option value="CC">Cocos (Keeling) Islands</option><option value="CO">Colombia</option><option value="KM">Comoros</option><option value="CG">Congo</option><option value="CD">Congo, the Democratic Republic of the</option><option value="CK">Cook Islands</option><option value="CR">Costa Rica</option><option value="CI">Côte d'Ivoire</option><option value="HR">Croatia</option><option value="CU">Cuba</option><option value="CW">Curaçao</option><option value="CY">Cyprus</option><option value="CZ">Czech Republic</option><option value="DK">Denmark</option><option value="DJ">Djibouti</option><option value="DM">Dominica</option><option value="DO">Dominican Republic</option><option value="EC">Ecuador</option><option value="EG">Egypt</option><option value="SV">El Salvador</option><option value="GQ">Equatorial Guinea</option><option value="ER">Eritrea</option><option value="EE">Estonia</option><option value="ET">Ethiopia</option><option value="FK">Falkland Islands (Malvinas)</option><option value="FO">Faroe Islands</option><option value="FJ">Fiji</option><option value="FI">Finland</option><option value="FR">France</option><option value="GF">French Guiana</option><option value="PF">French Polynesia</option><option value="TF">French Southern Territories</option><option value="GA">Gabon</option><option value="GM">Gambia</option><option value="GE">Georgia</option><option value="DE">Germany</option><option value="GH">Ghana</option><option value="GI">Gibraltar</option><option value="GR">Greece</option><option value="GL">Greenland</option><option value="GD">Grenada</option><option value="GP">Guadeloupe</option><option value="GU">Guam</option><option value="GT">Guatemala</option><option value="GG">Guernsey</option><option value="GN">Guinea</option><option value="GW">Guinea-Bissau</option><option value="GY">Guyana</option><option value="HT">Haiti</option><option value="HM">Heard Island and McDonald Islands</option><option value="VA">Holy See (Vatican City State)</option><option value="HN">Honduras</option><option value="HK">Hong Kong</option><option value="HU">Hungary</option><option value="IS">Iceland</option><option value="IN">India</option><option value="ID">Indonesia</option><option value="IR">Iran, Islamic Republic of</option><option value="IQ">Iraq</option><option value="IE">Ireland</option><option value="IM">Isle of Man</option><option value="IL">Israel</option><option value="IT">Italy</option><option value="JM">Jamaica</option><option value="JP">Japan</option><option value="JE">Jersey</option><option value="JO">Jordan</option><option value="KZ">Kazakhstan</option><option value="KE">Kenya</option><option value="KI">Kiribati</option><option value="KP">Korea, Democratic People's Republic of</option><option value="KR">Korea, Republic of</option><option value="KW">Kuwait</option><option value="KG">Kyrgyzstan</option><option value="LA">Lao People's Democratic Republic</option><option value="LV">Latvia</option><option value="LB">Lebanon</option><option value="LS">Lesotho</option><option value="LR">Liberia</option><option value="LY">Libya</option><option value="LI">Liechtenstein</option><option value="LT">Lithuania</option><option value="LU">Luxembourg</option><option value="MO">Macao</option><option value="MK">Macedonia, the former Yugoslav Republic of</option><option value="MG">Madagascar</option><option value="MW">Malawi</option><option value="MY">Malaysia</option><option value="MV">Maldives</option><option value="ML">Mali</option><option value="MT">Malta</option><option value="MH">Marshall Islands</option><option value="MQ">Martinique</option><option value="MR">Mauritania</option><option value="MU">Mauritius</option><option value="YT">Mayotte</option><option value="MX">Mexico</option><option value="FM">Micronesia, Federated States of</option><option value="MD">Moldova, Republic of</option><option value="MC">Monaco</option><option value="MN">Mongolia</option><option value="ME">Montenegro</option><option value="MS">Montserrat</option><option value="MA">Morocco</option><option value="MZ">Mozambique</option><option value="MM">Myanmar</option><option value="NA">Namibia</option><option value="NR">Nauru</option><option value="NP">Nepal</option><option value="NL">Netherlands</option><option value="NC">New Caledonia</option><option value="NZ">New Zealand</option><option value="NI">Nicaragua</option><option value="NE">Niger</option><option value="NG">Nigeria</option><option value="NU">Niue</option><option value="NF">Norfolk Island</option><option value="MP">Northern Mariana Islands</option><option value="NO">Norway</option><option value="OM">Oman</option><option value="PK">Pakistan</option><option value="PW">Palau</option><option value="PS">Palestinian Territory, Occupied</option><option value="PA">Panama</option><option value="PG">Papua New Guinea</option><option value="PY">Paraguay</option><option value="PE">Peru</option><option value="PH">Philippines</option><option value="PN">Pitcairn</option><option value="PL">Poland</option><option value="PT">Portugal</option><option value="PR">Puerto Rico</option><option value="QA">Qatar</option><option value="RE">Réunion</option><option value="RO">Romania</option><option value="RU">Russian Federation</option><option value="RW">Rwanda</option><option value="BL">Saint Barthélemy</option><option value="SH">Saint Helena, Ascension and Tristan da Cunha</option><option value="KN">Saint Kitts and Nevis</option><option value="LC">Saint Lucia</option><option value="MF">Saint Martin (French part)</option><option value="PM">Saint Pierre and Miquelon</option><option value="VC">Saint Vincent and the Grenadines</option><option value="WS">Samoa</option><option value="SM">San Marino</option><option value="ST">Sao Tome and Principe</option><option value="SA">Saudi Arabia</option><option value="SN">Senegal</option><option value="RS">Serbia</option><option value="SC">Seychelles</option><option value="SL">Sierra Leone</option><option value="SG">Singapore</option><option value="SX">Sint Maarten (Dutch part)</option><option value="SK">Slovakia</option><option value="SI">Slovenia</option><option value="SB">Solomon Islands</option><option value="SO">Somalia</option><option value="ZA">South Africa</option><option value="GS">South Georgia and the South Sandwich Islands</option><option value="SS">South Sudan</option><option value="ES">Spain</option><option value="LK">Sri Lanka</option><option value="SD">Sudan</option><option value="SR">Suriname</option><option value="SJ">Svalbard and Jan Mayen</option><option value="SZ">Swaziland</option><option value="SE">Sweden</option><option value="CH">Switzerland</option><option value="SY">Syrian Arab Republic</option><option value="TW">Taiwan, Province of China</option><option value="TJ">Tajikistan</option><option value="TZ">Tanzania, United Republic of</option><option value="TH">Thailand</option><option value="TL">Timor-Leste</option><option value="TG">Togo</option><option value="TK">Tokelau</option><option value="TO">Tonga</option><option value="TT">Trinidad and Tobago</option><option value="TN">Tunisia</option><option value="TR">Turkey</option><option value="TM">Turkmenistan</option><option value="TC">Turks and Caicos Islands</option><option value="TV">Tuvalu</option><option value="UG">Uganda</option><option value="UA">Ukraine</option><option value="AE">United Arab Emirates</option><option value="GB">United Kingdom</option><option value="US">United States</option><option value="UM">United States Minor Outlying Islands</option><option value="UY">Uruguay</option><option value="UZ">Uzbekistan</option><option value="VU">Vanuatu</option><option value="VE">Venezuela, Bolivarian Republic of</option><option value="VN">Viet Nam</option><option value="VG">Virgin Islands, British</option><option value="VI">Virgin Islands, U.S.</option><option value="WF">Wallis and Futuna</option><option value="EH">Western Sahara</option><option value="YE">Yemen</option><option value="ZM">Zambia</option><option value="ZW">Zimbabwe</option>
              </select>
              <div style="height:25px;"></div>
              <input type="text" class="input-basic" id="shippingEmail1" placeholder="E-mail">
              <br>
              <input type="text" class="input-basic" id="shippingEmail2" placeholder="Repeat e-mail">
              <br>
              <input type="text" class="input-basic" id="shippingPhone" placeholder="Phone nr (optional)">
              <div id="shipping-errors" class="address-errors"></div>
              <div style="height:10px;"></div>
            </div>
          </div>
        </div>
              


        <!-- PAYMENT METHOD SWITCH -->

        <div style="height:35px;"></div>

        <div style="font-size:14px;color:#333333;">
          <div class="switch-label" style="width:90px;text-align:right;" onclick="payWithChange('card')">
            <span id="pay-with-card-label" class="inactive active">Bank card</span>
          </div>
          <div style="width:90px;text-align:center;display:inline-block;">
            <label class="switch">
              <input id="switch-payment-type" type="checkbox" onchange="payWithChange('switch')">
              <span class="slider round"></span>
            </label>
          </div>
          <div class="switch-label" style="width:90px;text-align:left;" onclick="payWithChange('crypto')">
            <!-- <b v-if="payWith == 'crypto'" >Crypto</b> -->
            <span id="pay-with-crypto-label" class="inactive">Crypto</span>
          </div>
        </div>

        <div style="height:25px;"></div>



        <!-- PAY WITH CARD -->
        <div id="checkout-card" class="checkout-component">   
          <div class="checkout-component-heading">
            Paying with a bank card
          </div>

          <div class="pay-with-content">

            <img src="img/logo-stripe.png" width="100">

            <div style="height:5px;"></div>
            <div style="width:fit-content;margin:0 auto;">
              <div style="display:inline;float:left;">
                <b>Pay with credit or debit card</b>
              </div>
            </div>

            <div style="clear:both;padding-top:20px;font-size:15px;">
              You will be redirected to Stripe to complete your order.
            </div>
          </div>
        </div>


        <!-- PAY WITH CRYPTO -->
        <div id="checkout-crypto" class="checkout-component hidden">
          <div class="checkout-component-heading">
            Paying with cryptocurrency
          </div>

          <div class="pay-with-content">
            <img src="img/logo-coinbase.png" width="145">

            <div style="height:5px;"></div>
            <div style="width:fit-content;margin:0 auto;">
              <div style="display:inline;float:left;">
                Pay with: <b>BTC</b>, <b>ETH</b>, <b>BCH</b>, <b>LTC</b>, <b>USDC</b>
              </div>
            </div>

            <div style="clear:both;padding-top:20px;font-size:15px;">
              You will be redirected to Coinbase to complete your order.
            </div>
          </div>
        </div>


        <div class="checkout-errors" id="checkout-errors" style="margin-top:15px;margin-bottom:15px;color:red;font-size:14px;text-align:center;">
        </div>

        <div style="clear:both;height:25px;"></div>


        <div class="checkbox-div" style="margin-left:0 auto;padding-top:0px!important;">
          <label>
            <input type="checkbox" name="agree" id="agree">
            <div class="checkmark"></div>
            <div style="padding-left:16px;font-size:14px;">I agree to the Terms and Conditions</div>
          </label>
        </div>

        <div style="clear:both;height:30px;"></div>

        <button disabled class="button-payment button-payment-disabled" id="btn-checkout-disabled">Please wait...</button>

        <button onclick="errorsCheck()" id="btn-checkout" class="button-payment">Checkout</button>

        <!-- <button onclick="alert('Coming soon')" class="button-payment">Checkout</button> -->
        <!-- <button v-else @click="orderItems()" class="button-payment">Order items for ${{ finalSum }}.00</button> -->

        <div style="height:40px;"></div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "Checkout",
  data() {
    return {

    }
  },
  methods: {
    orderItems: function() {
      // alert('Coming soon...');
      
    },
  },
  mounted: function() {
    // console.log(svgMask);
    // document.getElementById('t-shirt-mask').appendChild(svgMask);
  }
}
</script>

<style scoped>
    body, html {
      margin:0px;
      padding:5px;
      color: #222;
    }

    a, a:hover, a:visited, a:active {
      color: #6393c1;
    }
</style>