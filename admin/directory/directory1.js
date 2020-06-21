var directory1 = function(load){
	this.load = load;
	this.image = null;
	this.loaded = false;
	this.init = function(){
		this.loadImage();
	}
	this.loadImage = function(){
		this.image = new Image();
		this.image.onload = function(){
			self.loaded = true;
		}
		this.image.src = 'base.jpg';
	}
}