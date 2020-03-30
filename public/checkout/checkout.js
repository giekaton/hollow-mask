
// homeUrl = 'http://localhost';
homeUrl = 'https://hollowmask.com';

// Web-shop

function npCloseModal() {
  document.body.style.overflowY = "visible";
  divHide('np-modal');

  getById('hm-svg-tshirt').innerHTML = "";
}

function npOpenModal() {
  // var SVGcode = libraidenticon(customUrl);
  // innerHTML('identicon-tshirt', SVGcode);
  document.body.style.overflowY = "hidden";
  divShow('np-modal');

  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox","0 0 400 400");
  svg.setAttribute("width","140");
  svg.classList.add("mockup-svg");
  svg.id = "mockup-svg";

  var maskHead = getById('mask-head');
  var maskHeadClone = maskHead.cloneNode();
  maskHeadClone.style.fill = '#fffffffa';
  svg.appendChild(maskHeadClone);

  var maskEyes = getById('mask-eyes');
  var maskEyesClone = maskEyes.cloneNode();
  svg.appendChild(maskEyesClone);

  var maskNose = getById('mask-nose');
  var maskNoseClone = maskNose.cloneNode();
  svg.appendChild(maskNoseClone);

  var maskMouth = getById('mask-mouth');
  var maskMouthClone = maskMouth.cloneNode();
  svg.appendChild(maskMouthClone);

  getById('hm-svg-tshirt').innerHTML = "";
  getById('hm-svg-tshirt').appendChild(svg);

  var maskHead = getById('mask-head');
  // maskHead += "";

  // var hmSvgCheckout = getById('mask-head') + getById('mask-eyes') + getById('mask-nose') + getById('mask-mouth');
  // console.log(hmSvgCheckout);

  // console.log(maskHead);
}

payWith = 'card';
isSwitched = false;

function payWithChange(to) {
  getById('checkout-errors').innerHTML = '';
  
  // console.log(to);
  if (to == 'card') {
    payWith = 'card';
    isSwitched = false;
    document.getElementById('switch-payment-type').checked = false;
    classAdd('pay-with-card-label', 'active');
    classRemove('pay-with-crypto-label', 'active');
    divShow('checkout-card');
    divHide('checkout-crypto');
  }
  if (to == 'crypto') {
    payWith = 'crypto';
    isSwitched = true;
    document.getElementById('switch-payment-type').checked = true;
    classAdd('pay-with-crypto-label', 'active');
    classRemove('pay-with-card-label', 'active');
    divShow('checkout-crypto');
    divHide('checkout-card');
  }
  if (to == 'switch') {
    if (payWith == 'card') {
      payWith = 'crypto';
      isSwitched = true;
      document.getElementById('switch-payment-type').checked = true;
      classAdd('pay-with-crypto-label', 'active');
      classRemove('pay-with-card-label', 'active');
      divShow('checkout-crypto');
      divHide('checkout-card');
    }
    else {
      payWith = 'card';
      isSwitched = false;
      document.getElementById('switch-payment-type').checked = false;
      classAdd('pay-with-card-label', 'active');
      classRemove('pay-with-crypto-label', 'active');
      divShow('checkout-card');
      divHide('checkout-crypto');
    }
  }
}


function errorsCheck() {
  if (!getById('agree').checked) {
// if(false){
    var shippingErrors = ""
    shippingErrors += "Please read and agree to the Terms and Conditions<br>"
    shippingErrors = '<div style="height:15px;"></div><span style="color:#222222;"><b>Errors:</b></span><br>' + shippingErrors;
    getById('checkout-errors').innerHTML = shippingErrors;
    return false;
  }
  else {
    var shippingErrors = "";
    
    var shippingNameSurname = getById('shippingNameSurname').value
    var shippingAddressLine1 = getById('shippingAddressLine1').value
    var shippingAddressLine2 = getById('shippingAddressLine2').value
    var shippingCountry = getById('shippingCountry').value
    var shippingEmail1 = getById('shippingEmail1').value
    var shippingEmail2 = getById('shippingEmail2').value

    if (shippingNameSurname.length < 1) {
      shippingErrors += "Missing first and last name<br>"
    }
    if (shippingAddressLine1.length < 1) {
      shippingErrors += "Missing address line 1<br>"
    }
    if (shippingAddressLine2.length < 1) {
      shippingErrors += "Missing address line 2<br>"
    }
    if (shippingCountry.length < 1) {
      shippingErrors += "Missing country<br>"
    }
    if (shippingEmail1.length < 1) {
      shippingErrors += "Missing e-mail address<br>"
    }
    if (shippingEmail2.length < 1) {
      shippingErrors += "Please repeat the e-mail address<br>"
    }
    else if (shippingEmail1 != shippingEmail2) {
      shippingErrors += "E-mail addresses do not match<br>"
    }
// shippingErrors=""
    if (shippingErrors.length == 0) {
      shippingErrors = '';
      getById('checkout-errors').innerHTML = shippingErrors;
      paymentProcessing = true;

      getById('btn-checkout').style.display = 'none';
      getById('btn-checkout-disabled').style.display = 'block';
      
      var productSize = getById('product-size').value
      var productSvg = getById('hm-svg-tshirt').innerHTML
      var phone = getById('shippingPhone').value

      var order = {
        name: shippingNameSurname,
        add1: shippingAddressLine1,
        add2: shippingAddressLine2,
        country: shippingCountry,
        email: shippingEmail1,
        phone: phone,
        size: productSize,
        mask: {
          head: getById('mask-head').getAttribute('d'),
          eyes: getById('mask-eyes').getAttribute('d'),
          nose: getById('mask-nose').getAttribute('d'),
          mouth: getById('mask-mouth').getAttribute('d'),
        } 
      }

      var orderFinal = JSON.stringify(order);

      if (payWith == 'crypto') {
        coinbaseBuyProceed(orderFinal);
      }
      else {
        stripeBuyProceed(orderFinal);
      }
      
    }
    else {
      paymentProcessing = false;
      shippingErrors = '<div style="height:15px;"></div><span style="color:#222222;"><b>Errors:</b></span><br>' + shippingErrors;
      getById('checkout-errors').innerHTML = shippingErrors;
    }

  }
}



function coinbaseBuyProceed(orderFinal) {

  // let productData = "&productsPrice=" + this.productsPrice + "&shipping=" + this.shipping + "&finalSum=" + this.finalSum + "&shippingNameSurname=" + this.shippingNameSurname + "&shippingAddressLine1=" + this.shippingAddressLine1 + "&shippingAddressLine2=" + this.shippingAddressLine2 + "&shippingCountry=" + this.shippingCountry + "&shippingEmail=" + this.shippingEmail1 + "&shippingPhone=" + this.shippingPhone + "&productsObject=" + JSON.stringify(this.products);
  // let data = productData;
  // let self = this;

  // axios.post('/coinbase', 'action=coinbase' + data)
  // .then(response => { 
  //   console.log(typeof(response));
  //   console.log(response.data);
  //   if (response.data[0] == 'success') {
  //     dexie.products.clear();
  //     window.location = response.data[1];
  //   }
  // })

  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      if(xhr.response) {
        document.getElementById('np-modal').style.display = "block";
        data = JSON.parse(xhr.response);
        window.location = data[1];
      }
    } 
    else {
      console.log('The request failed!');
    }
  };  
  xhr.open('GET', homeUrl+'/checkout/server_hm.php?action=coinbase&data='+orderFinal);
  xhr.send();
  
}



function stripeBuyProceed(orderFinal) {

  let data = "&productsPrice=" + this.productsPrice + "&shipping=" + this.shipping + "&finalSum=" + this.finalSum + "&shippingNameSurname=" + this.shippingNameSurname + "&shippingAddressLine1=" + this.shippingAddressLine1 + "&shippingAddressLine2=" + this.shippingAddressLine2 + "&shippingCountry=" + this.shippingCountry + "&shippingEmail=" + this.shippingEmail1 + "&shippingPhone=" + this.shippingPhone + "&productsObject=" + JSON.stringify(this.products);
  let self = this;

  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      if(xhr.response) {
        console.log(xhr.response)
        // npSendUserAddress();

        let data = xhr.response.data;
        data = JSON.parse(xhr.response);

        // let stripe = Stripe('pk_test_EuqH4wB0gkSRJ5ynsAweEQmq00g3wS6Z3n');
        let stripe = Stripe('pk_live_gBWE9m0XLjHIF0R7ymOwa4lu00PKMEv14R');

        stripe.redirectToCheckout({
            sessionId: data.id
        })
        .then(function (result) {
            console.error(result.error.message);
        });


      }
    } 
    else {
      console.log('The request failed!');
    }
  };

  xhr.open('GET', homeUrl+'/checkout/server_hm.php?action=stripe&data='+orderFinal);
  xhr.send();

}


// Helper functions

function getById(id) {
  return document.getElementById(id);
}

function divHide(id) {
  document.getElementById(id).style.display = 'none';
}

function divShow(id) {
  document.getElementById(id).style.display = "block";
}

function innerHTML(id, code) {
  document.getElementById(id).innerHTML = code;
}

function classAdd(id, className) {
  var el = getById(id);
  el.classList.add(className);
}

function classRemove(id, className) {
  var el = getById(id);
  el.classList.remove(className);
}