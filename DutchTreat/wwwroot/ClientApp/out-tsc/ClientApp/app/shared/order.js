"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var Order = (function () {
    function Order() {
        this.orderDate = new Date();
        this.items = new Array();
    }
    Object.defineProperty(Order.prototype, "subtotal", {
        get: function () {
            return _.sum(_.map(this.items, function (i) { return i.unitPrice * i.quantity; }));
        },
        enumerable: true,
        configurable: true
    });
    ;
    return Order;
}());
exports.Order = Order;
//export class OrderItem {
//  id: number;
//  quantity: number;
//  unitPrice: number;
//  productId: number;
//  productCategory: string;
//  productSize: string;
//  productTitle: string;
//  productArtist: string;
//  productArtId: string;
//} 
//# sourceMappingURL=order.js.map