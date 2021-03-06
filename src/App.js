import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <ul class="breadcrumb">
          <a class="bread_crumb" href="index.html">Vladimir Iashin</a> 
          / Online Object Detector
        </ul>

        <h1> Object Detector </h1>

        <p style={{width: "90%"}}>
          Hi there! This is an object detector. Given an image, it will localize the objects and tell which class the model thinks they belong to.
          There are only <a href="https://raw.githubusercontent.com/v-iashin/WebsiteYOLO/master/data/coco.names" class="intext">80 classes</a> that the model knows. Make sure you adjust your expectations :)
        </p>
        <p style={{width: "90%"}}>
          Under the hood, the web-page (front-end) will send your image to the cloud server.
          Then, the model makes detections and sends results for you to see here (back-end).
          Source code for both <a href="https://github.com/v-iashin/v-iashin.github.io/blob/master/detector.html" class="intext">front-end</a> and <a href="https://github.com/v-iashin/WebsiteYOLO" class="intext">back-end</a> is available.
        </p>
        <p style={{width: "90%"}}>
          The detector is based on <a href="https://pjreddie.com/darknet/yolo/" class="intext">YOLOv3</a> and was trained on a large dataset of annotated images called <a href="https://cocodataset.org" class="intext">COCO</a>.
          It used to be the state-of-the-art among fast object detectors when I re-implemented it just for fun and glued to this project.
        </p>
        <p style={{width: "90%"}}>
          <i>Please note that the results are saved on the server and inspected later on.</i>
        </p>

        <hr/>

      
        <div class="buttons">
        
          <div id="examples_text" class="examples_text">Try examples: a <li id="example_dog" class="example">dog</li>, a <li id="example_street" class="example">street</li>, a <li id="example_wedding" class="example">wedding</li>, and <li id="example_ngc1499" class="example">NGC1499</li> 
            <br/> or 
          </div>

          <label id="upload" for="file-input" class="btn upload"> Upload Your Image </label>
          <input id="file-input" type="file" accept="image/*"/>
      
          <button id="detect" class="btn detect hide"> Detect </button>
        
          <button id="reload" class="btn reload hide" onclick="reload()"> Reset </button>
        </div>

      
        <div class="preview">
        </div>

        <footer class="version">
          Detection Project, 2019 (<span id="status"></span>)
        </footer>
    </div>
  );
}

export default App;
