google.maps.__gjsload__('overlay', function(_) {
    var sD = function(a) {
            this.Fg = a
        },
        opa = function() {},
        tD = function(a) {
            a.Gy = a.Gy || new opa;
            return a.Gy
        },
        ppa = function(a) {
            this.Ch = new _.wn(() => {
                const b = a.Gy;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.Uw && a.onAdd) a.onAdd();
                        b.Uw = !0;
                        a.draw()
                    }
                } else {
                    if (b.Uw)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.Uw = !1
                }
            }, 0)
        },
        qpa = function(a, b) {
            const c = tD(a);
            let d = c.cw;
            d || (d = c.cw = new ppa(a));
            _.Qb(c.Qh || [], _.Ck);
            var e = c.ni = c.ni || new _.Aka;
            const f = b.__gm;
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("center", f, "projectionCenterQ");
            e.bindTo("projection", b);
            e.bindTo("projectionTopLeft", f);
            e = c.wC = c.wC || new sD(e);
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("projection", b);
            e.bindTo("projectionTopLeft", f);
            a.bindTo("projection", e, "outProjection");
            a.bindTo("panes", f);
            e = () => _.xn(d.Ch);
            c.Qh = [_.Ak(a, "panes_changed", e), _.Ak(f, "zoom_changed", e), _.Ak(f, "offset_changed", e), _.Ak(b, "projection_changed", e), _.Ak(f, "projectioncenterq_changed", e)];
            _.xn(d.Ch);
            b instanceof _.Yk ? (_.Il(b, "Ox"), _.Gl(b, 148440)) : b instanceof _.cm && (_.Il(b, "Oxs"),
                _.Gl(b, 181451))
        },
        vpa = function(a) {
            if (a) {
                var b = a.getMap();
                if (rpa(a) !== b && b && b instanceof _.Yk) {
                    const c = b.__gm;
                    c.overlayLayer ? a.__gmop = new spa(b, a, c.overlayLayer) : c.Gg.then(({
                        lh: d
                    }) => {
                        const e = new tpa(b, d);
                        d.Bi(e);
                        c.overlayLayer = e;
                        upa(a);
                        vpa(a)
                    })
                }
            }
        },
        upa = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, b.Fg.unbindAll(), b.Fg.set("panes", null), b.Fg.set("projection", null), b.Hg.xl(b), b.Gg && (b.Gg = !1, b.Fg.onRemove ? b.Fg.onRemove() : b.Fg.remove()))
            }
        },
        rpa = function(a) {
            return (a = a.__gmop) ? a.map : null
        },
        wpa = function(a,
            b) {
            a.Fg.get("projection") != b && (a.Fg.bindTo("panes", a.map.__gm), a.Fg.set("projection", b))
        };
    _.Ia(sD, _.Sk);
    sD.prototype.changed = function(a) {
        "outProjection" != a && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.ij(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.Fg : null))
    };
    var uD = {};
    _.Ia(ppa, _.Sk);
    uD.Hl = function(a) {
        if (a) {
            var b = a.getMap();
            (tD(a).eC || null) !== b && (b && qpa(a, b), tD(a).eC = b)
        }
    };
    uD.xl = function(a) {
        const b = tD(a);
        var c = b.ni;
        c && c.unbindAll();
        (c = b.wC) && c.unbindAll();
        a.unbindAll();
        a.set("panes", null);
        a.set("projection", null);
        b.Qh && _.Qb(b.Qh, _.Ck);
        b.Qh = null;
        b.cw && (b.cw.Ch.Ej(), b.cw = null);
        delete tD(a).eC
    };
    var vD = {},
        spa = class {
            constructor(a, b, c) {
                this.map = a;
                this.Fg = b;
                this.Hg = c;
                this.Gg = !1;
                _.Il(this.map, "Ox");
                _.Gl(this.map, 148440);
                c.Hl(this)
            }
            draw() {
                this.Gg || (this.Gg = !0, this.Fg.onAdd && this.Fg.onAdd());
                this.Fg.draw && this.Fg.draw()
            }
        },
        tpa = class {
            constructor(a, b) {
                this.Jg = a;
                this.Hg = b;
                this.Fg = null;
                this.Gg = []
            }
            dispose() {}
            Ii(a, b, c, d, e, f, g, h) {
                const l = this.Fg = this.Fg || new _.cB(this.Jg, this.Hg, () => {});
                l.Ii(a, b, c, d, e, f, g, h);
                for (const n of this.Gg) wpa(n, l), n.draw()
            }
            Hl(a) {
                this.Gg.push(a);
                this.Fg && wpa(a, this.Fg);
                this.Hg.refresh()
            }
            xl(a) {
                _.Wb(this.Gg,
                    a)
            }
        };
    vD.Hl = vpa;
    vD.xl = upa;
    _.sk("overlay", {
        vA: function(a) {
            if (a) {
                (0, uD.xl)(a);
                (0, vD.xl)(a);
                var b = a.getMap();
                b && (b instanceof _.Yk ? (0, vD.Hl)(a) : (0, uD.Hl)(a))
            }
        },
        preventMapHitsFrom: a => {
            _.Kw(a, {
                Uk: ({
                    event: b
                }) => {
                    _.Mu(b.Jh)
                },
                ak: b => _.vw(b),
                Wp: b => _.ww(b),
                Vk: b => _.ww(b),
                sk: b => _.xw(b)
            }).Cr(!0)
        },
        preventMapHitsAndGesturesFrom: a => {
            a.addEventListener("click", _.yk);
            a.addEventListener("contextmenu", _.yk);
            a.addEventListener("dblclick", _.yk);
            a.addEventListener("mousedown", _.yk);
            a.addEventListener("mousemove", _.yk);
            a.addEventListener("MSPointerDown",
                _.yk);
            a.addEventListener("pointerdown", _.yk);
            a.addEventListener("touchstart", _.yk);
            a.addEventListener("wheel", _.yk)
        }
    });
});