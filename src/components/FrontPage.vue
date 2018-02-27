<template>
  <div>
    <div class="frontpage">
      <h1>{{ msg }}</h1>
      <br />
      <p>{{ overview1 }}</p>
      <br />
      <p>{{ overview2 }}</p>
    </div>
    
    <br />
    <br />
    <br />
    
    <div class="container platform">
      <div class="row md-alignment-center-center">
        <div class="col-md-6">
          <img src="../assets/img1.jpg">
        </div>
        <div class="col-md-6">
          <h4>1. Digitization and Preservation</h4>
          <br />
          <br />
          <p>{{ platform1 }}</p> 
        </div>
      </div>
    </div>
    
    <br />
    <br />
    <br />
    
    <div class="container platform">  
      <div class="row">
        <div class="col-md-6">
          <h4>2. Provenance and Authentication Security</h4>
          <br />
          <br />
          <p>{{ platform1 }}</p> 
        </div>
        <div class="col-md-6">
          <img src="../assets/img2.jpg">
        </div>
      </div>
    </div>
    
    <br />
    <br />
    <br />
      
    <div class="container platform">  
      <div class="row">
        <div class="col-md-6">
          <img src="../assets/img3.jpg">
        </div>
        <div class="col-md-6">
          <h4>3. Digitized Mint and Marketplace</h4>
          <br />
          <br />
          <p>{{ platform1 }}</p> 
        </div>
      </div>
    </div>  
    <br />
    <br />
    <br />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FrontPage',
  data () {
    return {
      msg: 'Overview',
      overview1: 'Azura is the world’s first all-encompassing digital art platform. Comprised of three main elements that combine real-world art preservation with innovative blockchain and distributed ledger technology, Azura seeks to provide the mechanism by which the world of physical art and it’s provenances can authentically and verifiably enter the digital world. ',
      overview2: 'Each of Azura’s “big three” work together to create a definitive platform that enhances and modernizes how we interact with world’s oldest cultural commodity. ',
      platform1: 'Led by preservation expert Santiago Relanzon, Azura’s team of digitization professionals can capture ultra high-resolution representations of any piece of physical art. With the help of state of the art camera equipment and lighting techniques, Azura can faithfully digitize paintings, sketches, photographs, film, and sculptures of all sizes without sacrificing the nuance and detail that lend them their emotional power. ',
      platform2: 'Using blockchain, Azura can issue permanent [and unalterable] certificates of authenticity for any work in its registry. The application of distributed ledger and image recognition technology virtually eliminates the risk of fraudulent activity in the forms of forgery and misrepresentation.',
      platform3: 'Until the advent of distributed ledger technology, anything that existed in the digital world was susceptible to forgery -- a duplicated MP3 or image file was impossible to differentiate from its original. Today, we have blockchain-based applications that allow for the creation of rare and 100% verifiable digital assets. Azura provides digital asset collectors with the ultimate platform for storing and trading their digitized art assets. Its marketplace and auction house will help augment the existing art market and, as its platform grows, create a totally new market for artists and collectors to monetize their assets.'
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.platform {
  text-align: center
}
.frontpage {
  padding-top: 20px;
  text-align: center;
  margin: 0;
}
.loadercontainer {
  padding: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.loader {
  width: 3em;
  height: 3em;
  animation: loaderAnim 1.25s infinite;
  outline: 1px solid transparent;
}
.loader #largeBox {
  height: 3em;
  width: 3em;
  background-color: #34495e;
  outline: 1px solid transparent;
  position: fixed;
}
.loader #smallBox {
  height: 3em;
  width: 3em;
  background-color: #ECECEC;
  position: fixed;
  z-index: 1;
  outline: 1px solid transparent;
  animation: smallBoxAnim 1.25s alternate infinite ease-in-out;
}

@keyframes smallBoxAnim {
  0% {
    transform: scale(0.2);
  }
  100% {
    transform: scale(0.75);
  }
}
@keyframes loaderAnim {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(90deg);
  }
}

</style>
