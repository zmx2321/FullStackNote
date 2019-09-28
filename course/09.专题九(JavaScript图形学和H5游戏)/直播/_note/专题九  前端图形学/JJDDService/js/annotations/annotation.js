/**
 @class Annotation
 @module xeogl
 @submodule annotations
 @constructor
 @param [scene] {Scene} Parent {{#crossLink "Scene"}}Scene{{/crossLink}} - creates this Pin in the default
 {{#crossLink "Scene"}}Scene{{/crossLink}} when omitted.
 @param [cfg] {*} Configs
 @param [cfg.id] {String} Optional ID, unique among all components in the parent {{#crossLink "Scene"}}Scene{{/crossLink}},
 generated automatically when omitted.
 @param [cfg.meta] {String:Object} Optional map of user-defined metadata to attach to the Annotation.
 @param [cfg.mesh] {Number|String|Mesh} ID or instance of the {{#crossLink "Mesh"}}{{/crossLink}} the Annotation is attached to.
 @param [cfg.bary=[0.3,0.3,0.3]] {Float32Array} Barycentric coordinates of the Annotation within its triangle.
 @param [cfg.primIndex=0] {Number} Index of the triangle containing the Annotation. Within the {{#crossLink "Mesh"}}{{/crossLink}} {{#crossLink "Geometry"}}{{/crossLink}}
 {{#crossLink "Geometry/indices:property"}}{{/crossLink}}, this is the index of the first
 element for that triangle.
 @param [cfg.offset=0.2] {Number} How far the Annotation is lifted out of its triangle, along the surface normal vector. This is used when occlusion culling, to ensure that the Annotation is not lost inside the surface it's attached to.
 @param [cfg.occludable=true] {Boolean} 相机遮挡后是否可见
 @param [cfg.glyph=""] {String} 批注的短文本
 @param [cfg.title=""] {String} Title text for the Annotation's label. Automatically truncated to 64 characters.
 @param [cfg.desc=""] {String} Description text for the Annotation's label. Automatically truncated to 1025 characters.
 @param [cfg.eye=[0,0,-10]] {Float32Array} Position of the eye when looking at the Annotation.
 @param [cfg.look=[0,0,0]] {Float32Array} Position of the look when looking at the Annotation.
 @param [cfg.up=[0,1,0]] {Float32Array} Direction of the "up" vector when looking at the Annotation.
 @param [cfg.pinShown=true] {Boolean} Specifies whether a UI element is shown at the Annotation's pin position (typically a circle).
 @param [cfg.labelShown=true] {Boolean} Specifies whether the Annotation's label is shown.
 @extends Pin
 */
xeogl.Annotation = class xeoglAnnotation extends xeogl.Pin {

    /**
     JavaScript class name for this Component.

     For example: "xeogl.AmbientLight", "xeogl.ColorTarget", "xeogl.Lights" etc.

     @property type
     @type String
     @final
     */
    get type() {
        return "xeogl.Annotation";
    }

    init(cfg) {

        super.init(cfg);

        this._link = document.createElement("a");
        this._link.href = "javascript:xeogl.scenes[\"" + this.scene.id + "\"].components[\"" + this.id + "\"]._pinClicked()";
        document.body.appendChild(this._link);

        this._spotClickable = document.createElement("div");
        this._spotClickable.className = "xeogl-annotation-pinClickable";
        this._link.appendChild(this._spotClickable);

        this._spot = document.createElement("div");
        this._spot.innerText = "i";
        this._spot.className = "xeogl-annotation-pin";
        document.body.appendChild(this._spot);

        this._label = document.createElement('div');
        this._label.className = "xeogl-annotation-label";
        document.body.appendChild(this._label);

        this._titleElement = document.createElement('div');
        this._titleElement.className = "xeogl-annotation-title";
        this._titleElement.innerHTML = cfg.title || "";
        this._label.appendChild(this._titleElement);

        this._descElement = document.createElement('div');
        this._descElement.className = "xeogl-annotation-desc";
        this._descElement.innerHTML = cfg.desc || "";
        this._label.appendChild(this._descElement);

        this.glyph = cfg.glyph;
        this.title = cfg.title;
        this.desc = cfg.desc;
        this.eye = cfg.eye;
        this.look = cfg.look;
        this.up = cfg.up;

        this.pinShown = cfg.pinShown;
        this.labelShown = cfg.labelShown;

        this._tick = this.scene.on("tick", this._updateLayout, this);

        this.on("visible", this._updateVisibility, this);

        //  this._updateVisibility();
    }

    _pinClicked() {

        /**
         Fired whenever the mouse is clicked on this Annotation's {{#crossLink "Annotation/pin:property"}}{{/crossLink}}.

         @event pinClicked
         */
        this.fire("pinClicked", this)
    }

    /**
     Short piece of text to show inside the pin for the Annotation.

     Usually this would be a single number or letter.

     Automatically truncated to 2 characters.

     Fires a {{#crossLink "Annotation/glyph:event"}}{{/crossLink}} event on change.

     @property glyph
     @default ""
     @type {String}
     */
    set glyph(glyph) {

        if (this._glyph === glyph) {
            return;
        }

        this._glyph = glyph || ""; // TODO: Limit to 2 chars
        this._spot.innerText = this._glyph;

        /**
         Fired whenever this Annotation's {{#crossLink "Annotation/glyph:property"}}{{/crossLink}} property changes.

         @event glyph
         @param value {Number} The property's new value
         */
        this.fire("glyph", this._glyph);
    }

    get glyph() {
        return this._glyph;
    }


    /**
     Title text for the Annotation's label.

     Automatically truncated to 64 characters.

     Fires a {{#crossLink "Annotation/title:event"}}{{/crossLink}} event on change.

     @property title
     @default ""
     @type {String}
     */
    set title(title) {

        if (this._title === title) {
            return;
        }

        this._title = title || ""; // TODO: Limit to 64 chars
        this._titleElement.innerHTML = this._title;

        /**
         Fired whenever this Annotation's {{#crossLink "Annotation/title:property"}}{{/crossLink}} property changes.

         @event title
         @param value {Number} The property's new value
         */
        this.fire("title", this._title);
    }

    get title() {
        return this._title;
    }

    /**
     Description text for the Annotation's label.

     Automatically truncated to 1025 characters.

     Fires a {{#crossLink "Annotation/desc:event"}}{{/crossLink}} event on change.

     @property desc
     @default ""
     @type {String}
     */
    set desc(desc) {

        if (this._desc === desc) {
            return;
        }

        this._desc = desc || ""; // TODO: Limit to 1025 chars
        this._descElement.innerHTML = this._desc;

        /**
         Fired whenever this Annotation's {{#crossLink "Annotation/desc:property"}}{{/crossLink}} property changes.

         @event desc
         @param value {Number} The property's new value
         */
        this.fire("desc", this._desc);
    }

    get desc() {
        return this._desc;
    }

    /**
     Position of the eye when looking at the Annotation.

     Fires a {{#crossLink "Annotation/eye:event"}}{{/crossLink}} event on change.

     @property eye
     @default [0,0,10]
     @type {Float32Array}
     */
    set eye(value) {

        value = value || [0, 0, 10];

        if (this._eye && this._eye[0] === value[0] && this._eye[1] === value[1] && this._eye[2] === value[2]) {
            return;
        }

        (this._eye = this._eye || xeogl.math.vec3()).set(value);

        /**
         Fired whenever this Annotation's {{#crossLink "Annotation/eye:property"}}{{/crossLink}} property changes.

         @event eye
         @param value {Number} The property's new value
         */
        this.fire("eye", this._eye);
    }

    get eye() {
        return this._eye;
    }

    /**
     Point-of-interest when looking at the Annotation.

     Fires a {{#crossLink "Annotation/look:event"}}{{/crossLink}} event on change.

     @property look
     @default [0,0,0]
     @type {Float32Array}
     */
    set look(value) {

        value = value || [0, 0, 0];

        if (this._look && this._look[0] === value[0] && this._look[1] === value[1] && this._look[2] === value[2]) {
            return;
        }

        (this._look = this._look || xeogl.math.vec3()).set(value);

        /**
         Fired whenever this Annotation's {{#crossLink "Annotation/look:property"}}{{/crossLink}} property changes.

         @event look
         @param value {Number} The property's new value
         */
        this.fire("look", this._look);
    }

    get look() {
        return this._look;
    }

    /**
     "Up" vector when looking at the Annotation.

     Fires a {{#crossLink "Annotation/up:event"}}{{/crossLink}} event on change.

     @property up
     @default [0,1,0]
     @type {Float32Array}
     */
    set up(value) {

        value = value || [0, 1, 0];

        if (this._up && this._up[0] === value[0] && this._up[1] === value[1] && this._up[2] === value[2]) {
            return;
        }

        (this._up = this._up || xeogl.math.vec3()).set(value);

        /**
         Fired whenever this Annotation's {{#crossLink "Annotation/up:property"}}{{/crossLink}} property changes.

         @event up
         @param value {Number} The property's new value
         */
        this.fire("up", this._up);
    }

    get up() {
        return this._up;
    }

    /**
     Specifies whether a UI element is shown at the Annotation's pin position (typically a circle).

     Fires a {{#crossLink "Annotation/pinShown:event"}}{{/crossLink}} event on change.

     @property pinShown
     @default true
     @type {Boolean}
     */
    set pinShown(shown) {

        shown = shown !== false;

        if (this._pinShown === shown) {
            return;
        }

        this._pinShown = shown;
        this._spot.style.visibility = this._pinShown ? "visible" : "hidden";
        this._spotClickable.style.visibility = this._pinShown ? "visible" : "hidden";

        /**
         Fired whenever this Annotation's {{#crossLink "Annotation/pinShown:property"}}{{/crossLink}} property changes.

         @event pinShown
         @param value {Number} The property's new value
         */
        this.fire("pinShown", this._pinShown);
    }

    get pinShown() {
        return this._pinShown;
    }

    /**
     Specifies whether the label is shown for the Annotation.

     Fires a {{#crossLink "Annotation/labelShown:event"}}{{/crossLink}} event on change.

     @property labelShown
     @default true
     @type {Boolean}
     */
    set labelShown(shown) {

        shown = shown !== false;

        if (this._labelShown === shown) {
            return;
        }

        this._labelShown = shown;
        this._label.style.visibility = this._labelShown && this.visible ? "visible" : "hidden";

        /**
         Fired whenever this Annotation's {{#crossLink "Annotation/labelShown:property"}}{{/crossLink}} property changes.

         @event labelShown
         @param value {Number} The property's new value
         */
        this.fire("labelShown", this._labelShown);
    }

    get labelShown() {
        return this._labelShown;
    }

    _updateVisibility() {
        const visible = this.visible;
        this._spotClickable.style.visibility = visible && this._pinShown ? "visible" : "hidden";
        this._spot.style.visibility = visible && this._pinShown ? "visible" : "hidden";
        this._label.style.visibility = visible && this._labelShown ? "visible" : "hidden";
    }

    _updateLayout() {
        const visible = this.visible;
        if (visible) {
            const canvas = this.scene.canvas.canvas;
            // const canvas = document.getElementById('myCanvas');
            const left = canvas.offsetLeft;
            const top = canvas.offsetTop;
            let canvasPos = this.canvasPos;
            canvasPos = [canvasPos[0]+$("#js-ann-any01").outerWidth(),canvasPos[1]+210];
            this._spot.style.left = (Math.floor(left + canvasPos[0]) - 12) + "px";
            this._spot.style.top = (Math.floor(top + canvasPos[1]) - 12) + "px";
            this._spotClickable.style.left = (Math.floor(left + canvasPos[0]) - 25 + 1) + "px";
            this._spotClickable.style.top = (Math.floor(top + canvasPos[1]) - 25 + 1) + "px";
            const offsetX = 20;
            const offsetY = -17;
            this._label.style.left = 20 + (canvasPos[0] + offsetX) + "px";
            this._label.style.top = (canvasPos[1] + offsetY) + "px";
            this._spot.style["z-index"] = 90005 + Math.floor(this.viewPos[2] * 10) + 1;
        }
    }

    getJSON() {
        const math = xeogl.math;
        const json = {
            primIndex: this.primIndex,
            bary: math.vecToArray(this.bary),
            offset: this.offset,
            occludable: this.occludable,
            glyph: this._glyph,
            title: this._title,
            desc: this._desc,
            eye: math.vecToArray(this._eye),
            look: math.vecToArray(this._look),
            up: math.vecToArray(this._up),
            pinShown: this._pinShown,
            labelShown: this._labelShown
        };
        if (this._attached.mesh) {
            json.mesh = this._attached.mesh.id;
        }
        return json;
    }

    destroy() {
        super.destroy();
        this.scene.off(this._tick);
        this._link.parentNode.removeChild(this._link);
        this._spot.parentNode.removeChild(this._spot);
        this._label.parentNode.removeChild(this._label);
    }
};