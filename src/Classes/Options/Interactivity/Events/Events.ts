import {IEvents} from "../../../../Interfaces/Options/Interactivity/Events/IEvents";
import {ClickEvent} from "./ClickEvent";
import {IDivEvent} from "../../../../Interfaces/Options/Interactivity/Events/IDivEvent";
import {IHoverEvent} from "../../../../Interfaces/Options/Interactivity/Events/IHoverEvent";
import {DivEvent} from "./DivEvent";
import {HoverEvent} from "./HoverEvent";
import {IClickEvent} from "../../../../Interfaces/Options/Interactivity/Events/IClickEvent";

export class Events implements IEvents {
    /**
     *
     * @deprecated this property is obsolete, please use the new onClick
     */
    public get onclick(): IClickEvent {
        return this.onClick;
    }

    /**
     *
     * @deprecated this property is obsolete, please use the new onClick
     * @param value
     */
    public set onclick(value) {
        this.onClick = value;
    }

    /**
     *
     * @deprecated this property is obsolete, please use the new onDiv
     */
    public get ondiv(): IDivEvent {
        return this.onDiv;
    }

    /**
     *
     * @deprecated this property is obsolete, please use the new onDiv
     * @param value
     */
    public set ondiv(value) {
        this.onDiv = value;
    }

    /**
     *
     * @deprecated this property is obsolete, please use the new onHover
     */
    public get onhover(): IHoverEvent {
        return this.onHover;
    }

    /**
     *
     * @deprecated this property is obsolete, please use the new onHover
     * @param value
     */
    public set onhover(value) {
        this.onHover = value;
    }

    public onClick: IClickEvent;
    public onDiv: IDivEvent;
    public onHover: IHoverEvent;
    public resize: boolean;

    constructor() {
        this.onClick = new ClickEvent();
        this.onDiv = new DivEvent();
        this.onHover = new HoverEvent();
        this.resize = true;
    }
}
