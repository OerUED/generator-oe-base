/**
 * <%= desc %>
 * Author:<%= author %>
 * 依赖:
 */
(function(root, fn) {
    if (root['define'] != undefined && typeof define === 'function' && define.amd) {
        define(fn);
    } else if (typeof exports === 'object') {
        module.exports = fn();
    } else {
        root.<%= title %> = fn();
    }
}(this, function() {
    function <%= title %>() {
        //todo...
    }

    return <%= title %>;

}));
