const app = getApp()
const upng = require('upng-js');
const {
	default: jsQR
} = require('jsqr');
Page({
	data: {

	},
	onLoad() {
		wx.createSelectorQuery().select('#canvas').fields({
			node: true
		}).exec(res => {
			const canvas = res[0].node;
			const ctx = canvas.getContext('2d');
			const img = canvas.createImage();
			img.src = '../imgs/hello+world.png';
			img.onload = () => {
				ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
				let url = canvas.toDataURL();
				this.setData({
					imgUrl: url
				});
			}
		});
	},
	handleimgLongpress(e) {
		let {
			url: url
		} = e.currentTarget.dataset;
		wx.showActionSheet({
			itemList: ['识别二维码'],
			success: (result) => {
				if(result.tapIndex === 0){
					let buff = wx.base64ToArrayBuffer(url.split(',')[1]);
					let r = upng.decode(buff);
					let rgba = upng.toRGBA8(r)[0];
					let code = jsQR(new Uint8ClampedArray(rgba), r.width,r.height);
					console.log(code.data)
				}
			},
			fail: (res) => {},
			complete: (res) => {},
		})
	}
})