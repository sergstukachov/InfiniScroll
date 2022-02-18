define(['uiComponent'], function (Component) {
    'use strict';

    const width = 200, height = 330;

    const ItemComponent = Component.extend({
        defaults: {
            template: 'SkillUp_InfiniScroll/item',
            width,
            height
        }
    });
    ItemComponent.width = width;
    ItemComponent.height = height;

    return ItemComponent;
});
