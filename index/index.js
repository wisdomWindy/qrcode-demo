const app = getApp()
const upng = require('upng-js');
const { default: jsQR } = require('jsqr');
Page({
  data: {

  },
  onLoad() {
	},
	handleLongpress(e){
		const {
			canvasid:canvasId
		} = e.currentTarget.dataset;
		wx.createSelectorQuery().select('#canvas').fields({node:true}).exec(res => {
			const canvas = res[0].node;
			const ctx = canvas.getContext('2d');
			const img = canvas.createImage();
			img.src = '../imgs/hello+world.png';
			img.onload = function (){
				ctx.drawImage(img,0,0,canvas.width,canvas.height);
				console.log(canvasId, img, img.width,img.width, canvas.width,canvas.height);
				let url = canvas.toDataURL();
				let buff = wx.base64ToArrayBuffer(url.split(',')[1]);
				let r = upng.decode(buff);
				let rgba = upng.toRGBA8(r)[0];
				let code = jsQR(new Uint8ClampedArray(rgba),canvas.width,canvas.height);
				console.log(code.data)
			}
		});	
	}
})
