
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// welcome
		const welcome = this.add.text(640, 478, "", {});
		welcome.setOrigin(0.5, 0.5);
		welcome.text = "Sprite stack\n( Move your moues around to see the effect )";
		welcome.setStyle({ "align": "center", "fontFamily": "Arial", "fontSize": "30px" });

		// color_cube29
		const color_cube29 = this.add.image(650, 250, "color_cube2", 9);
		color_cube29.scaleX = 10;
		color_cube29.scaleY = 10;

		// color_cube28
		const color_cube28 = this.add.image(650, 250, "color_cube2", 8);
		color_cube28.scaleX = 10;
		color_cube28.scaleY = 10;

		// color_cube27
		const color_cube27 = this.add.image(650, 250, "color_cube2", 7);
		color_cube27.scaleX = 10;
		color_cube27.scaleY = 10;

		// color_cube26
		const color_cube26 = this.add.image(650, 250, "color_cube2", 6);
		color_cube26.scaleX = 10;
		color_cube26.scaleY = 10;

		// color_cube25
		const color_cube25 = this.add.image(650, 250, "color_cube2", 5);
		color_cube25.scaleX = 10;
		color_cube25.scaleY = 10;

		// color_cube24
		const color_cube24 = this.add.image(650, 250, "color_cube2", 4);
		color_cube24.scaleX = 10;
		color_cube24.scaleY = 10;

		// color_cube23
		const color_cube23 = this.add.image(650, 250, "color_cube2", 3);
		color_cube23.scaleX = 10;
		color_cube23.scaleY = 10;

		// color_cube22
		const color_cube22 = this.add.image(650, 250, "color_cube2", 2);
		color_cube22.scaleX = 10;
		color_cube22.scaleY = 10;

		// color_cube21
		const color_cube21 = this.add.image(650, 250, "color_cube2", 1);
		color_cube21.scaleX = 10;
		color_cube21.scaleY = 10;

		// color_cube20
		const color_cube20 = this.add.image(650, 250, "color_cube2", 0);
		color_cube20.scaleX = 10;
		color_cube20.scaleY = 10;

		// lists
		const cubelist = [color_cube20, color_cube21, color_cube22, color_cube23, color_cube24, color_cube25, color_cube26, color_cube27, color_cube28, color_cube29];

		this.welcome = welcome;
		this.color_cube29 = color_cube29;
		this.color_cube28 = color_cube28;
		this.color_cube27 = color_cube27;
		this.color_cube26 = color_cube26;
		this.color_cube25 = color_cube25;
		this.color_cube24 = color_cube24;
		this.color_cube23 = color_cube23;
		this.color_cube22 = color_cube22;
		this.color_cube21 = color_cube21;
		this.color_cube20 = color_cube20;
		this.cubelist = cubelist;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	welcome;
	/** @type {Phaser.GameObjects.Image} */
	color_cube29;
	/** @type {Phaser.GameObjects.Image} */
	color_cube28;
	/** @type {Phaser.GameObjects.Image} */
	color_cube27;
	/** @type {Phaser.GameObjects.Image} */
	color_cube26;
	/** @type {Phaser.GameObjects.Image} */
	color_cube25;
	/** @type {Phaser.GameObjects.Image} */
	color_cube24;
	/** @type {Phaser.GameObjects.Image} */
	color_cube23;
	/** @type {Phaser.GameObjects.Image} */
	color_cube22;
	/** @type {Phaser.GameObjects.Image} */
	color_cube21;
	/** @type {Phaser.GameObjects.Image} */
	color_cube20;
	/** @type {Phaser.GameObjects.Image[]} */
	cubelist;

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();

		// this.cubelist.
		var staticX = 650;
		var staticY = 250;

		this.input.on('pointermove', (pointer) => {
			var distX = pointer.x - staticX;
			var distY = pointer.y - staticY;
			var images = 9;

			var distPerImageX = distX / images;
			var distPerImageY = distY / images;

			if(distPerImageX > 2) distPerImageX = 2;
			if(distPerImageX < -2) distPerImageX = -2;
			if(distPerImageY > 2) distPerImageY = 2;
			if(distPerImageY < -2) distPerImageY = -2;

			var index = 0;
			for(var image of this.cubelist)
			{
				image.x = staticX + (distPerImageX * index);
				image.y = staticY + (distPerImageY * index);
				index++;
			}
		});

		this.time.addEvent({
			delay: 20,
			callback: () => {
				for(var image of this.cubelist)
				{
					image.angle = image.angle + 1;
				}
			},
			callbackScope: this,
			loop: true
		});

		this.input.keyboard.on('keydown', (event) => {
            if (event.key === 'ArrowLeft') 
			{
				for(var image of this.cubelist)
				{
					image.angle = image.angle + 5;
				}
            }
			else if (event.key === 'ArrowRight')
			{
				for(var image of this.cubelist)
				{
					image.angle = image.angle - 5;
				}
            }
        });
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
