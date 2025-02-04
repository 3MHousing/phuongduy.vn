const e = e=>{
    let t = [];
    for (let s of e)
        219 == s ? t = t.concat([219, 221]) : 192 == s ? t = t.concat([219, 220]) : t.push(s);
    return t
}
  , t = e=>{
    let t = [];
    for (let s = 0; s < e.length; s++) {
        let i = e.charCodeAt(s);
        i <= 255 && t.push(i)
    }
    return t
}
  , s = (e,...t)=>{
    let s = 0;
    if (e.replace(/[<>]/, "").length != t.length)
        throw new Error("Pack format to Argument count mismatch");
    let i = []
      , r = !0;
    const n = (e,t)=>{
        for (let s = 0; s < t; s++)
            r ? i.push(e >> 8 * s & 255) : i.push(e >> 8 * (t - s) & 255)
    }
    ;
    for (let i = 0; i < e.length; i++)
        if ("<" == e[i])
            r = !0;
        else if (">" == e[i])
            r = !1;
        else if ("B" == e[i])
            n(t[s], 1),
            s++;
        else if ("H" == e[i])
            n(t[s], 2),
            s++;
        else {
            if ("I" != e[i])
                throw new Error(`Unhandled character "${e[i]}" in pack format`);
            n(t[s], 4),
            s++
        }
    return i
}
  , i = (e,t)=>{
    let s = 0
      , i = [];
    for (let r of e)
        if ("B" == r)
            i.push(255 & t[s]),
            s += 1;
        else if ("H" == r)
            i.push(255 & t[s] | (255 & t[s + 1]) << 8),
            s += 2;
        else {
            if ("I" != r)
                throw new Error(`Unhandled character "${r}" in unpack format`);
            i.push(255 & t[s] | (255 & t[s + 1]) << 8 | (255 & t[s + 2]) << 16 | (255 & t[s + 3]) << 24),
            s += 4
        }
    return i
}
  , r = (e,t=2)=>{
    let s = e.toString(16).toUpperCase();
    return s.startsWith("-") ? "-0x" + s.substring(1).padStart(t, "0") : "0x" + s.padStart(t, "0")
}
  , n = e=>new Promise((t=>setTimeout(t, e)))
  , a = {
    "512KB": 0,
    "256KB": 16,
    "1MB": 32,
    "2MB": 48,
    "4MB": 64,
    "2MB-c1": 80,
    "4MB-c1": 96,
    "8MB": 128,
    "16MB": 144
}
  , o = {
    "1MB": 0,
    "2MB": 16,
    "4MB": 32,
    "8MB": 48,
    "16MB": 64,
    "32MB": 25,
    "64MB": 26
}
  , l = 2
  , h = 0
  , d = {
    18: "256KB",
    19: "512KB",
    20: "1MB",
    21: "2MB",
    22: "4MB",
    23: "8MB",
    24: "16MB",
    25: "32MB",
    26: "64MB"
}
  , c = t(" UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU")
  , u = 33382
  , p = 50
  , f = 12882
  , m = 12835
  , g = {
    [-999167]: {
        name: "ESP8266",
        family: u
    },
    15736195: {
        name: "ESP32",
        family: p
    },
    1990: {
        name: "ESP32-S2",
        family: f
    },
    9: {
        name: "ESP32-S3",
        family: 12883
    },
    3942662454: {
        name: "ESP32-S3(beta2)",
        family: 12883
    },
    1763790959: {
        name: "ESP32-C3",
        family: m
    },
    456216687: {
        name: "ESP32-C3",
        family: m
    },
    3391540258: {
        name: "ESP32-H2",
        family: 12914
    },
    228687983: {
        name: "ESP32-C6(beta)",
        family: 12838
    }
}
  , _ = (e,t)=>{
    let s = Math.floor(e * (t / 486));
    return s < 3e3 ? 3e3 : s
}
  , w = async e=>{
    let s;
    return e == p ? s = await import("./esp32-0beba529.js") : e == f ? s = await import("./esp32s2-8f8a89fc.js") : e == u ? s = await import("./esp8266-23618669.js") : e == m && (s = await import("./esp32c3-78f4ac45.js")),
    {
        ...s,
        text: t(atob(s.text)),
        data: t(atob(s.data))
    }
}
;
function y(e) {
    let t = e.length;
    for (; --t >= 0; )
        e[t] = 0
}
const b = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0])
  , v = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13])
  , S = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7])
  , k = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
  , x = new Array(576);
y(x);
const E = new Array(60);
y(E);
const A = new Array(512);
y(A);
const z = new Array(256);
y(z);
const C = new Array(29);
y(C);
const R = new Array(30);
function U(e, t, s, i, r) {
    this.static_tree = e,
    this.extra_bits = t,
    this.extra_base = s,
    this.elems = i,
    this.max_length = r,
    this.has_stree = e && e.length
}
let P, O, T;
function I(e, t) {
    this.dyn_tree = e,
    this.max_code = 0,
    this.stat_desc = t
}
y(R);
const N = e=>e < 256 ? A[e] : A[256 + (e >>> 7)]
  , B = (e,t)=>{
    e.pending_buf[e.pending++] = 255 & t,
    e.pending_buf[e.pending++] = t >>> 8 & 255
}
  , F = (e,t,s)=>{
    e.bi_valid > 16 - s ? (e.bi_buf |= t << e.bi_valid & 65535,
    B(e, e.bi_buf),
    e.bi_buf = t >> 16 - e.bi_valid,
    e.bi_valid += s - 16) : (e.bi_buf |= t << e.bi_valid & 65535,
    e.bi_valid += s)
}
  , $ = (e,t,s)=>{
    F(e, s[2 * t], s[2 * t + 1])
}
  , D = (e,t)=>{
    let s = 0;
    do {
        s |= 1 & e,
        e >>>= 1,
        s <<= 1
    } while (--t > 0);
    return s >>> 1
}
  , M = (e,t,s)=>{
    const i = new Array(16);
    let r, n, a = 0;
    for (r = 1; r <= 15; r++)
        i[r] = a = a + s[r - 1] << 1;
    for (n = 0; n <= t; n++) {
        let t = e[2 * n + 1];
        0 !== t && (e[2 * n] = D(i[t]++, t))
    }
}
  , L = e=>{
    let t;
    for (t = 0; t < 286; t++)
        e.dyn_ltree[2 * t] = 0;
    for (t = 0; t < 30; t++)
        e.dyn_dtree[2 * t] = 0;
    for (t = 0; t < 19; t++)
        e.bl_tree[2 * t] = 0;
    e.dyn_ltree[512] = 1,
    e.opt_len = e.static_len = 0,
    e.last_lit = e.matches = 0
}
  , H = e=>{
    e.bi_valid > 8 ? B(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf),
    e.bi_buf = 0,
    e.bi_valid = 0
}
  , Z = (e,t,s,i)=>{
    const r = 2 * t
      , n = 2 * s;
    return e[r] < e[n] || e[r] === e[n] && i[t] <= i[s]
}
  , j = (e,t,s)=>{
    const i = e.heap[s];
    let r = s << 1;
    for (; r <= e.heap_len && (r < e.heap_len && Z(t, e.heap[r + 1], e.heap[r], e.depth) && r++,
    !Z(t, i, e.heap[r], e.depth)); )
        e.heap[s] = e.heap[r],
        s = r,
        r <<= 1;
    e.heap[s] = i
}
  , V = (e,t,s)=>{
    let i, r, n, a, o = 0;
    if (0 !== e.last_lit)
        do {
            i = e.pending_buf[e.d_buf + 2 * o] << 8 | e.pending_buf[e.d_buf + 2 * o + 1],
            r = e.pending_buf[e.l_buf + o],
            o++,
            0 === i ? $(e, r, t) : (n = z[r],
            $(e, n + 256 + 1, t),
            a = b[n],
            0 !== a && (r -= C[n],
            F(e, r, a)),
            i--,
            n = N(i),
            $(e, n, s),
            a = v[n],
            0 !== a && (i -= R[n],
            F(e, i, a)))
        } while (o < e.last_lit);
    $(e, 256, t)
}
  , W = (e,t)=>{
    const s = t.dyn_tree
      , i = t.stat_desc.static_tree
      , r = t.stat_desc.has_stree
      , n = t.stat_desc.elems;
    let a, o, l, h = -1;
    for (e.heap_len = 0,
    e.heap_max = 573,
    a = 0; a < n; a++)
        0 !== s[2 * a] ? (e.heap[++e.heap_len] = h = a,
        e.depth[a] = 0) : s[2 * a + 1] = 0;
    for (; e.heap_len < 2; )
        l = e.heap[++e.heap_len] = h < 2 ? ++h : 0,
        s[2 * l] = 1,
        e.depth[l] = 0,
        e.opt_len--,
        r && (e.static_len -= i[2 * l + 1]);
    for (t.max_code = h,
    a = e.heap_len >> 1; a >= 1; a--)
        j(e, s, a);
    l = n;
    do {
        a = e.heap[1],
        e.heap[1] = e.heap[e.heap_len--],
        j(e, s, 1),
        o = e.heap[1],
        e.heap[--e.heap_max] = a,
        e.heap[--e.heap_max] = o,
        s[2 * l] = s[2 * a] + s[2 * o],
        e.depth[l] = (e.depth[a] >= e.depth[o] ? e.depth[a] : e.depth[o]) + 1,
        s[2 * a + 1] = s[2 * o + 1] = l,
        e.heap[1] = l++,
        j(e, s, 1)
    } while (e.heap_len >= 2);
    e.heap[--e.heap_max] = e.heap[1],
    ((e,t)=>{
        const s = t.dyn_tree
          , i = t.max_code
          , r = t.stat_desc.static_tree
          , n = t.stat_desc.has_stree
          , a = t.stat_desc.extra_bits
          , o = t.stat_desc.extra_base
          , l = t.stat_desc.max_length;
        let h, d, c, u, p, f, m = 0;
        for (u = 0; u <= 15; u++)
            e.bl_count[u] = 0;
        for (s[2 * e.heap[e.heap_max] + 1] = 0,
        h = e.heap_max + 1; h < 573; h++)
            d = e.heap[h],
            u = s[2 * s[2 * d + 1] + 1] + 1,
            u > l && (u = l,
            m++),
            s[2 * d + 1] = u,
            d > i || (e.bl_count[u]++,
            p = 0,
            d >= o && (p = a[d - o]),
            f = s[2 * d],
            e.opt_len += f * (u + p),
            n && (e.static_len += f * (r[2 * d + 1] + p)));
        if (0 !== m) {
            do {
                for (u = l - 1; 0 === e.bl_count[u]; )
                    u--;
                e.bl_count[u]--,
                e.bl_count[u + 1] += 2,
                e.bl_count[l]--,
                m -= 2
            } while (m > 0);
            for (u = l; 0 !== u; u--)
                for (d = e.bl_count[u]; 0 !== d; )
                    c = e.heap[--h],
                    c > i || (s[2 * c + 1] !== u && (e.opt_len += (u - s[2 * c + 1]) * s[2 * c],
                    s[2 * c + 1] = u),
                    d--)
        }
    }
    )(e, t),
    M(s, h, e.bl_count)
}
  , X = (e,t,s)=>{
    let i, r, n = -1, a = t[1], o = 0, l = 7, h = 4;
    for (0 === a && (l = 138,
    h = 3),
    t[2 * (s + 1) + 1] = 65535,
    i = 0; i <= s; i++)
        r = a,
        a = t[2 * (i + 1) + 1],
        ++o < l && r === a || (o < h ? e.bl_tree[2 * r] += o : 0 !== r ? (r !== n && e.bl_tree[2 * r]++,
        e.bl_tree[32]++) : o <= 10 ? e.bl_tree[34]++ : e.bl_tree[36]++,
        o = 0,
        n = r,
        0 === a ? (l = 138,
        h = 3) : r === a ? (l = 6,
        h = 3) : (l = 7,
        h = 4))
}
  , q = (e,t,s)=>{
    let i, r, n = -1, a = t[1], o = 0, l = 7, h = 4;
    for (0 === a && (l = 138,
    h = 3),
    i = 0; i <= s; i++)
        if (r = a,
        a = t[2 * (i + 1) + 1],
        !(++o < l && r === a)) {
            if (o < h)
                do {
                    $(e, r, e.bl_tree)
                } while (0 != --o);
            else
                0 !== r ? (r !== n && ($(e, r, e.bl_tree),
                o--),
                $(e, 16, e.bl_tree),
                F(e, o - 3, 2)) : o <= 10 ? ($(e, 17, e.bl_tree),
                F(e, o - 3, 3)) : ($(e, 18, e.bl_tree),
                F(e, o - 11, 7));
            o = 0,
            n = r,
            0 === a ? (l = 138,
            h = 3) : r === a ? (l = 6,
            h = 3) : (l = 7,
            h = 4)
        }
}
;
let K = !1;
const Y = (e,t,s,i)=>{
    F(e, 0 + (i ? 1 : 0), 3),
    ((e,t,s,i)=>{
        H(e),
        i && (B(e, s),
        B(e, ~s)),
        e.pending_buf.set(e.window.subarray(t, t + s), e.pending),
        e.pending += s
    }
    )(e, t, s, !0)
}
;
var J = {
    _tr_init: e=>{
        K || ((()=>{
            let e, t, s, i, r;
            const n = new Array(16);
            for (s = 0,
            i = 0; i < 28; i++)
                for (C[i] = s,
                e = 0; e < 1 << b[i]; e++)
                    z[s++] = i;
            for (z[s - 1] = i,
            r = 0,
            i = 0; i < 16; i++)
                for (R[i] = r,
                e = 0; e < 1 << v[i]; e++)
                    A[r++] = i;
            for (r >>= 7; i < 30; i++)
                for (R[i] = r << 7,
                e = 0; e < 1 << v[i] - 7; e++)
                    A[256 + r++] = i;
            for (t = 0; t <= 15; t++)
                n[t] = 0;
            for (e = 0; e <= 143; )
                x[2 * e + 1] = 8,
                e++,
                n[8]++;
            for (; e <= 255; )
                x[2 * e + 1] = 9,
                e++,
                n[9]++;
            for (; e <= 279; )
                x[2 * e + 1] = 7,
                e++,
                n[7]++;
            for (; e <= 287; )
                x[2 * e + 1] = 8,
                e++,
                n[8]++;
            for (M(x, 287, n),
            e = 0; e < 30; e++)
                E[2 * e + 1] = 5,
                E[2 * e] = D(e, 5);
            P = new U(x,b,257,286,15),
            O = new U(E,v,0,30,15),
            T = new U(new Array(0),S,0,19,7)
        }
        )(),
        K = !0),
        e.l_desc = new I(e.dyn_ltree,P),
        e.d_desc = new I(e.dyn_dtree,O),
        e.bl_desc = new I(e.bl_tree,T),
        e.bi_buf = 0,
        e.bi_valid = 0,
        L(e)
    }
    ,
    _tr_stored_block: Y,
    _tr_flush_block: (e,t,s,i)=>{
        let r, n, a = 0;
        e.level > 0 ? (2 === e.strm.data_type && (e.strm.data_type = (e=>{
            let t, s = 4093624447;
            for (t = 0; t <= 31; t++,
            s >>>= 1)
                if (1 & s && 0 !== e.dyn_ltree[2 * t])
                    return 0;
            if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26])
                return 1;
            for (t = 32; t < 256; t++)
                if (0 !== e.dyn_ltree[2 * t])
                    return 1;
            return 0
        }
        )(e)),
        W(e, e.l_desc),
        W(e, e.d_desc),
        a = (e=>{
            let t;
            for (X(e, e.dyn_ltree, e.l_desc.max_code),
            X(e, e.dyn_dtree, e.d_desc.max_code),
            W(e, e.bl_desc),
            t = 18; t >= 3 && 0 === e.bl_tree[2 * k[t] + 1]; t--)
                ;
            return e.opt_len += 3 * (t + 1) + 5 + 5 + 4,
            t
        }
        )(e),
        r = e.opt_len + 3 + 7 >>> 3,
        n = e.static_len + 3 + 7 >>> 3,
        n <= r && (r = n)) : r = n = s + 5,
        s + 4 <= r && -1 !== t ? Y(e, t, s, i) : 4 === e.strategy || n === r ? (F(e, 2 + (i ? 1 : 0), 3),
        V(e, x, E)) : (F(e, 4 + (i ? 1 : 0), 3),
        ((e,t,s,i)=>{
            let r;
            for (F(e, t - 257, 5),
            F(e, s - 1, 5),
            F(e, i - 4, 4),
            r = 0; r < i; r++)
                F(e, e.bl_tree[2 * k[r] + 1], 3);
            q(e, e.dyn_ltree, t - 1),
            q(e, e.dyn_dtree, s - 1)
        }
        )(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, a + 1),
        V(e, e.dyn_ltree, e.dyn_dtree)),
        L(e),
        i && H(e)
    }
    ,
    _tr_tally: (e,t,s)=>(e.pending_buf[e.d_buf + 2 * e.last_lit] = t >>> 8 & 255,
    e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t,
    e.pending_buf[e.l_buf + e.last_lit] = 255 & s,
    e.last_lit++,
    0 === t ? e.dyn_ltree[2 * s]++ : (e.matches++,
    t--,
    e.dyn_ltree[2 * (z[s] + 256 + 1)]++,
    e.dyn_dtree[2 * N(t)]++),
    e.last_lit === e.lit_bufsize - 1),
    _tr_align: e=>{
        F(e, 2, 3),
        $(e, 256, x),
        (e=>{
            16 === e.bi_valid ? (B(e, e.bi_buf),
            e.bi_buf = 0,
            e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = 255 & e.bi_buf,
            e.bi_buf >>= 8,
            e.bi_valid -= 8)
        }
        )(e)
    }
};
var G = (e,t,s,i)=>{
    let r = 65535 & e | 0
      , n = e >>> 16 & 65535 | 0
      , a = 0;
    for (; 0 !== s; ) {
        a = s > 2e3 ? 2e3 : s,
        s -= a;
        do {
            r = r + t[i++] | 0,
            n = n + r | 0
        } while (--a);
        r %= 65521,
        n %= 65521
    }
    return r | n << 16 | 0
}
;
const Q = new Uint32Array((()=>{
    let e, t = [];
    for (var s = 0; s < 256; s++) {
        e = s;
        for (var i = 0; i < 8; i++)
            e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
        t[s] = e
    }
    return t
}
)());
var ee = (e,t,s,i)=>{
    const r = Q
      , n = i + s;
    e ^= -1;
    for (let s = i; s < n; s++)
        e = e >>> 8 ^ r[255 & (e ^ t[s])];
    return -1 ^ e
}
  , te = {
    2: "need dictionary",
    1: "stream end",
    0: "",
    "-1": "file error",
    "-2": "stream error",
    "-3": "data error",
    "-4": "insufficient memory",
    "-5": "buffer error",
    "-6": "incompatible version"
}
  , se = {
    Z_NO_FLUSH: 0,
    Z_PARTIAL_FLUSH: 1,
    Z_SYNC_FLUSH: 2,
    Z_FULL_FLUSH: 3,
    Z_FINISH: 4,
    Z_BLOCK: 5,
    Z_TREES: 6,
    Z_OK: 0,
    Z_STREAM_END: 1,
    Z_NEED_DICT: 2,
    Z_ERRNO: -1,
    Z_STREAM_ERROR: -2,
    Z_DATA_ERROR: -3,
    Z_MEM_ERROR: -4,
    Z_BUF_ERROR: -5,
    Z_NO_COMPRESSION: 0,
    Z_BEST_SPEED: 1,
    Z_BEST_COMPRESSION: 9,
    Z_DEFAULT_COMPRESSION: -1,
    Z_FILTERED: 1,
    Z_HUFFMAN_ONLY: 2,
    Z_RLE: 3,
    Z_FIXED: 4,
    Z_DEFAULT_STRATEGY: 0,
    Z_BINARY: 0,
    Z_TEXT: 1,
    Z_UNKNOWN: 2,
    Z_DEFLATED: 8
};
const {_tr_init: ie, _tr_stored_block: re, _tr_flush_block: ne, _tr_tally: ae, _tr_align: oe} = J
  , {Z_NO_FLUSH: le, Z_PARTIAL_FLUSH: he, Z_FULL_FLUSH: de, Z_FINISH: ce, Z_BLOCK: ue, Z_OK: pe, Z_STREAM_END: fe, Z_STREAM_ERROR: me, Z_DATA_ERROR: ge, Z_BUF_ERROR: _e, Z_DEFAULT_COMPRESSION: we, Z_FILTERED: ye, Z_HUFFMAN_ONLY: be, Z_RLE: ve, Z_FIXED: Se, Z_DEFAULT_STRATEGY: ke, Z_UNKNOWN: xe, Z_DEFLATED: Ee} = se
  , Ae = (e,t)=>(e.msg = te[t],
t)
  , ze = e=>(e << 1) - (e > 4 ? 9 : 0)
  , Ce = e=>{
    let t = e.length;
    for (; --t >= 0; )
        e[t] = 0
}
;
let Re = (e,t,s)=>(t << e.hash_shift ^ s) & e.hash_mask;
const Ue = e=>{
    const t = e.state;
    let s = t.pending;
    s > e.avail_out && (s = e.avail_out),
    0 !== s && (e.output.set(t.pending_buf.subarray(t.pending_out, t.pending_out + s), e.next_out),
    e.next_out += s,
    t.pending_out += s,
    e.total_out += s,
    e.avail_out -= s,
    t.pending -= s,
    0 === t.pending && (t.pending_out = 0))
}
  , Pe = (e,t)=>{
    ne(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, t),
    e.block_start = e.strstart,
    Ue(e.strm)
}
  , Oe = (e,t)=>{
    e.pending_buf[e.pending++] = t
}
  , Te = (e,t)=>{
    e.pending_buf[e.pending++] = t >>> 8 & 255,
    e.pending_buf[e.pending++] = 255 & t
}
  , Ie = (e,t,s,i)=>{
    let r = e.avail_in;
    return r > i && (r = i),
    0 === r ? 0 : (e.avail_in -= r,
    t.set(e.input.subarray(e.next_in, e.next_in + r), s),
    1 === e.state.wrap ? e.adler = G(e.adler, t, r, s) : 2 === e.state.wrap && (e.adler = ee(e.adler, t, r, s)),
    e.next_in += r,
    e.total_in += r,
    r)
}
  , Ne = (e,t)=>{
    let s, i, r = e.max_chain_length, n = e.strstart, a = e.prev_length, o = e.nice_match;
    const l = e.strstart > e.w_size - 262 ? e.strstart - (e.w_size - 262) : 0
      , h = e.window
      , d = e.w_mask
      , c = e.prev
      , u = e.strstart + 258;
    let p = h[n + a - 1]
      , f = h[n + a];
    e.prev_length >= e.good_match && (r >>= 2),
    o > e.lookahead && (o = e.lookahead);
    do {
        if (s = t,
        h[s + a] === f && h[s + a - 1] === p && h[s] === h[n] && h[++s] === h[n + 1]) {
            n += 2,
            s++;
            do {} while (h[++n] === h[++s] && h[++n] === h[++s] && h[++n] === h[++s] && h[++n] === h[++s] && h[++n] === h[++s] && h[++n] === h[++s] && h[++n] === h[++s] && h[++n] === h[++s] && n < u);
            if (i = 258 - (u - n),
            n = u - 258,
            i > a) {
                if (e.match_start = t,
                a = i,
                i >= o)
                    break;
                p = h[n + a - 1],
                f = h[n + a]
            }
        }
    } while ((t = c[t & d]) > l && 0 != --r);
    return a <= e.lookahead ? a : e.lookahead
}
  , Be = e=>{
    const t = e.w_size;
    let s, i, r, n, a;
    do {
        if (n = e.window_size - e.lookahead - e.strstart,
        e.strstart >= t + (t - 262)) {
            e.window.set(e.window.subarray(t, t + t), 0),
            e.match_start -= t,
            e.strstart -= t,
            e.block_start -= t,
            i = e.hash_size,
            s = i;
            do {
                r = e.head[--s],
                e.head[s] = r >= t ? r - t : 0
            } while (--i);
            i = t,
            s = i;
            do {
                r = e.prev[--s],
                e.prev[s] = r >= t ? r - t : 0
            } while (--i);
            n += t
        }
        if (0 === e.strm.avail_in)
            break;
        if (i = Ie(e.strm, e.window, e.strstart + e.lookahead, n),
        e.lookahead += i,
        e.lookahead + e.insert >= 3)
            for (a = e.strstart - e.insert,
            e.ins_h = e.window[a],
            e.ins_h = Re(e, e.ins_h, e.window[a + 1]); e.insert && (e.ins_h = Re(e, e.ins_h, e.window[a + 3 - 1]),
            e.prev[a & e.w_mask] = e.head[e.ins_h],
            e.head[e.ins_h] = a,
            a++,
            e.insert--,
            !(e.lookahead + e.insert < 3)); )
                ;
    } while (e.lookahead < 262 && 0 !== e.strm.avail_in)
}
  , Fe = (e,t)=>{
    let s, i;
    for (; ; ) {
        if (e.lookahead < 262) {
            if (Be(e),
            e.lookahead < 262 && t === le)
                return 1;
            if (0 === e.lookahead)
                break
        }
        if (s = 0,
        e.lookahead >= 3 && (e.ins_h = Re(e, e.ins_h, e.window[e.strstart + 3 - 1]),
        s = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h],
        e.head[e.ins_h] = e.strstart),
        0 !== s && e.strstart - s <= e.w_size - 262 && (e.match_length = Ne(e, s)),
        e.match_length >= 3)
            if (i = ae(e, e.strstart - e.match_start, e.match_length - 3),
            e.lookahead -= e.match_length,
            e.match_length <= e.max_lazy_match && e.lookahead >= 3) {
                e.match_length--;
                do {
                    e.strstart++,
                    e.ins_h = Re(e, e.ins_h, e.window[e.strstart + 3 - 1]),
                    s = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h],
                    e.head[e.ins_h] = e.strstart
                } while (0 != --e.match_length);
                e.strstart++
            } else
                e.strstart += e.match_length,
                e.match_length = 0,
                e.ins_h = e.window[e.strstart],
                e.ins_h = Re(e, e.ins_h, e.window[e.strstart + 1]);
        else
            i = ae(e, 0, e.window[e.strstart]),
            e.lookahead--,
            e.strstart++;
        if (i && (Pe(e, !1),
        0 === e.strm.avail_out))
            return 1
    }
    return e.insert = e.strstart < 2 ? e.strstart : 2,
    t === ce ? (Pe(e, !0),
    0 === e.strm.avail_out ? 3 : 4) : e.last_lit && (Pe(e, !1),
    0 === e.strm.avail_out) ? 1 : 2
}
  , $e = (e,t)=>{
    let s, i, r;
    for (; ; ) {
        if (e.lookahead < 262) {
            if (Be(e),
            e.lookahead < 262 && t === le)
                return 1;
            if (0 === e.lookahead)
                break
        }
        if (s = 0,
        e.lookahead >= 3 && (e.ins_h = Re(e, e.ins_h, e.window[e.strstart + 3 - 1]),
        s = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h],
        e.head[e.ins_h] = e.strstart),
        e.prev_length = e.match_length,
        e.prev_match = e.match_start,
        e.match_length = 2,
        0 !== s && e.prev_length < e.max_lazy_match && e.strstart - s <= e.w_size - 262 && (e.match_length = Ne(e, s),
        e.match_length <= 5 && (e.strategy === ye || 3 === e.match_length && e.strstart - e.match_start > 4096) && (e.match_length = 2)),
        e.prev_length >= 3 && e.match_length <= e.prev_length) {
            r = e.strstart + e.lookahead - 3,
            i = ae(e, e.strstart - 1 - e.prev_match, e.prev_length - 3),
            e.lookahead -= e.prev_length - 1,
            e.prev_length -= 2;
            do {
                ++e.strstart <= r && (e.ins_h = Re(e, e.ins_h, e.window[e.strstart + 3 - 1]),
                s = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h],
                e.head[e.ins_h] = e.strstart)
            } while (0 != --e.prev_length);
            if (e.match_available = 0,
            e.match_length = 2,
            e.strstart++,
            i && (Pe(e, !1),
            0 === e.strm.avail_out))
                return 1
        } else if (e.match_available) {
            if (i = ae(e, 0, e.window[e.strstart - 1]),
            i && Pe(e, !1),
            e.strstart++,
            e.lookahead--,
            0 === e.strm.avail_out)
                return 1
        } else
            e.match_available = 1,
            e.strstart++,
            e.lookahead--
    }
    return e.match_available && (i = ae(e, 0, e.window[e.strstart - 1]),
    e.match_available = 0),
    e.insert = e.strstart < 2 ? e.strstart : 2,
    t === ce ? (Pe(e, !0),
    0 === e.strm.avail_out ? 3 : 4) : e.last_lit && (Pe(e, !1),
    0 === e.strm.avail_out) ? 1 : 2
}
;
function De(e, t, s, i, r) {
    this.good_length = e,
    this.max_lazy = t,
    this.nice_length = s,
    this.max_chain = i,
    this.func = r
}
const Me = [new De(0,0,0,0,((e,t)=>{
    let s = 65535;
    for (s > e.pending_buf_size - 5 && (s = e.pending_buf_size - 5); ; ) {
        if (e.lookahead <= 1) {
            if (Be(e),
            0 === e.lookahead && t === le)
                return 1;
            if (0 === e.lookahead)
                break
        }
        e.strstart += e.lookahead,
        e.lookahead = 0;
        const i = e.block_start + s;
        if ((0 === e.strstart || e.strstart >= i) && (e.lookahead = e.strstart - i,
        e.strstart = i,
        Pe(e, !1),
        0 === e.strm.avail_out))
            return 1;
        if (e.strstart - e.block_start >= e.w_size - 262 && (Pe(e, !1),
        0 === e.strm.avail_out))
            return 1
    }
    return e.insert = 0,
    t === ce ? (Pe(e, !0),
    0 === e.strm.avail_out ? 3 : 4) : (e.strstart > e.block_start && (Pe(e, !1),
    e.strm.avail_out),
    1)
}
)), new De(4,4,8,4,Fe), new De(4,5,16,8,Fe), new De(4,6,32,32,Fe), new De(4,4,16,16,$e), new De(8,16,32,32,$e), new De(8,16,128,128,$e), new De(8,32,128,256,$e), new De(32,128,258,1024,$e), new De(32,258,258,4096,$e)];
function Le() {
    this.strm = null,
    this.status = 0,
    this.pending_buf = null,
    this.pending_buf_size = 0,
    this.pending_out = 0,
    this.pending = 0,
    this.wrap = 0,
    this.gzhead = null,
    this.gzindex = 0,
    this.method = Ee,
    this.last_flush = -1,
    this.w_size = 0,
    this.w_bits = 0,
    this.w_mask = 0,
    this.window = null,
    this.window_size = 0,
    this.prev = null,
    this.head = null,
    this.ins_h = 0,
    this.hash_size = 0,
    this.hash_bits = 0,
    this.hash_mask = 0,
    this.hash_shift = 0,
    this.block_start = 0,
    this.match_length = 0,
    this.prev_match = 0,
    this.match_available = 0,
    this.strstart = 0,
    this.match_start = 0,
    this.lookahead = 0,
    this.prev_length = 0,
    this.max_chain_length = 0,
    this.max_lazy_match = 0,
    this.level = 0,
    this.strategy = 0,
    this.good_match = 0,
    this.nice_match = 0,
    this.dyn_ltree = new Uint16Array(1146),
    this.dyn_dtree = new Uint16Array(122),
    this.bl_tree = new Uint16Array(78),
    Ce(this.dyn_ltree),
    Ce(this.dyn_dtree),
    Ce(this.bl_tree),
    this.l_desc = null,
    this.d_desc = null,
    this.bl_desc = null,
    this.bl_count = new Uint16Array(16),
    this.heap = new Uint16Array(573),
    Ce(this.heap),
    this.heap_len = 0,
    this.heap_max = 0,
    this.depth = new Uint16Array(573),
    Ce(this.depth),
    this.l_buf = 0,
    this.lit_bufsize = 0,
    this.last_lit = 0,
    this.d_buf = 0,
    this.opt_len = 0,
    this.static_len = 0,
    this.matches = 0,
    this.insert = 0,
    this.bi_buf = 0,
    this.bi_valid = 0
}
const He = e=>{
    if (!e || !e.state)
        return Ae(e, me);
    e.total_in = e.total_out = 0,
    e.data_type = xe;
    const t = e.state;
    return t.pending = 0,
    t.pending_out = 0,
    t.wrap < 0 && (t.wrap = -t.wrap),
    t.status = t.wrap ? 42 : 113,
    e.adler = 2 === t.wrap ? 0 : 1,
    t.last_flush = le,
    ie(t),
    pe
}
  , Ze = e=>{
    const t = He(e);
    return t === pe && (e=>{
        e.window_size = 2 * e.w_size,
        Ce(e.head),
        e.max_lazy_match = Me[e.level].max_lazy,
        e.good_match = Me[e.level].good_length,
        e.nice_match = Me[e.level].nice_length,
        e.max_chain_length = Me[e.level].max_chain,
        e.strstart = 0,
        e.block_start = 0,
        e.lookahead = 0,
        e.insert = 0,
        e.match_length = e.prev_length = 2,
        e.match_available = 0,
        e.ins_h = 0
    }
    )(e.state),
    t
}
  , je = (e,t,s,i,r,n)=>{
    if (!e)
        return me;
    let a = 1;
    if (t === we && (t = 6),
    i < 0 ? (a = 0,
    i = -i) : i > 15 && (a = 2,
    i -= 16),
    r < 1 || r > 9 || s !== Ee || i < 8 || i > 15 || t < 0 || t > 9 || n < 0 || n > Se)
        return Ae(e, me);
    8 === i && (i = 9);
    const o = new Le;
    return e.state = o,
    o.strm = e,
    o.wrap = a,
    o.gzhead = null,
    o.w_bits = i,
    o.w_size = 1 << o.w_bits,
    o.w_mask = o.w_size - 1,
    o.hash_bits = r + 7,
    o.hash_size = 1 << o.hash_bits,
    o.hash_mask = o.hash_size - 1,
    o.hash_shift = ~~((o.hash_bits + 3 - 1) / 3),
    o.window = new Uint8Array(2 * o.w_size),
    o.head = new Uint16Array(o.hash_size),
    o.prev = new Uint16Array(o.w_size),
    o.lit_bufsize = 1 << r + 6,
    o.pending_buf_size = 4 * o.lit_bufsize,
    o.pending_buf = new Uint8Array(o.pending_buf_size),
    o.d_buf = 1 * o.lit_bufsize,
    o.l_buf = 3 * o.lit_bufsize,
    o.level = t,
    o.strategy = n,
    o.method = s,
    Ze(e)
}
;
var Ve = {
    deflateInit: (e,t)=>je(e, t, Ee, 15, 8, ke),
    deflateInit2: je,
    deflateReset: Ze,
    deflateResetKeep: He,
    deflateSetHeader: (e,t)=>e && e.state ? 2 !== e.state.wrap ? me : (e.state.gzhead = t,
    pe) : me,
    deflate: (e,t)=>{
        let s, i;
        if (!e || !e.state || t > ue || t < 0)
            return e ? Ae(e, me) : me;
        const r = e.state;
        if (!e.output || !e.input && 0 !== e.avail_in || 666 === r.status && t !== ce)
            return Ae(e, 0 === e.avail_out ? _e : me);
        r.strm = e;
        const n = r.last_flush;
        if (r.last_flush = t,
        42 === r.status)
            if (2 === r.wrap)
                e.adler = 0,
                Oe(r, 31),
                Oe(r, 139),
                Oe(r, 8),
                r.gzhead ? (Oe(r, (r.gzhead.text ? 1 : 0) + (r.gzhead.hcrc ? 2 : 0) + (r.gzhead.extra ? 4 : 0) + (r.gzhead.name ? 8 : 0) + (r.gzhead.comment ? 16 : 0)),
                Oe(r, 255 & r.gzhead.time),
                Oe(r, r.gzhead.time >> 8 & 255),
                Oe(r, r.gzhead.time >> 16 & 255),
                Oe(r, r.gzhead.time >> 24 & 255),
                Oe(r, 9 === r.level ? 2 : r.strategy >= be || r.level < 2 ? 4 : 0),
                Oe(r, 255 & r.gzhead.os),
                r.gzhead.extra && r.gzhead.extra.length && (Oe(r, 255 & r.gzhead.extra.length),
                Oe(r, r.gzhead.extra.length >> 8 & 255)),
                r.gzhead.hcrc && (e.adler = ee(e.adler, r.pending_buf, r.pending, 0)),
                r.gzindex = 0,
                r.status = 69) : (Oe(r, 0),
                Oe(r, 0),
                Oe(r, 0),
                Oe(r, 0),
                Oe(r, 0),
                Oe(r, 9 === r.level ? 2 : r.strategy >= be || r.level < 2 ? 4 : 0),
                Oe(r, 3),
                r.status = 113);
            else {
                let t = Ee + (r.w_bits - 8 << 4) << 8
                  , s = -1;
                s = r.strategy >= be || r.level < 2 ? 0 : r.level < 6 ? 1 : 6 === r.level ? 2 : 3,
                t |= s << 6,
                0 !== r.strstart && (t |= 32),
                t += 31 - t % 31,
                r.status = 113,
                Te(r, t),
                0 !== r.strstart && (Te(r, e.adler >>> 16),
                Te(r, 65535 & e.adler)),
                e.adler = 1
            }
        if (69 === r.status)
            if (r.gzhead.extra) {
                for (s = r.pending; r.gzindex < (65535 & r.gzhead.extra.length) && (r.pending !== r.pending_buf_size || (r.gzhead.hcrc && r.pending > s && (e.adler = ee(e.adler, r.pending_buf, r.pending - s, s)),
                Ue(e),
                s = r.pending,
                r.pending !== r.pending_buf_size)); )
                    Oe(r, 255 & r.gzhead.extra[r.gzindex]),
                    r.gzindex++;
                r.gzhead.hcrc && r.pending > s && (e.adler = ee(e.adler, r.pending_buf, r.pending - s, s)),
                r.gzindex === r.gzhead.extra.length && (r.gzindex = 0,
                r.status = 73)
            } else
                r.status = 73;
        if (73 === r.status)
            if (r.gzhead.name) {
                s = r.pending;
                do {
                    if (r.pending === r.pending_buf_size && (r.gzhead.hcrc && r.pending > s && (e.adler = ee(e.adler, r.pending_buf, r.pending - s, s)),
                    Ue(e),
                    s = r.pending,
                    r.pending === r.pending_buf_size)) {
                        i = 1;
                        break
                    }
                    i = r.gzindex < r.gzhead.name.length ? 255 & r.gzhead.name.charCodeAt(r.gzindex++) : 0,
                    Oe(r, i)
                } while (0 !== i);
                r.gzhead.hcrc && r.pending > s && (e.adler = ee(e.adler, r.pending_buf, r.pending - s, s)),
                0 === i && (r.gzindex = 0,
                r.status = 91)
            } else
                r.status = 91;
        if (91 === r.status)
            if (r.gzhead.comment) {
                s = r.pending;
                do {
                    if (r.pending === r.pending_buf_size && (r.gzhead.hcrc && r.pending > s && (e.adler = ee(e.adler, r.pending_buf, r.pending - s, s)),
                    Ue(e),
                    s = r.pending,
                    r.pending === r.pending_buf_size)) {
                        i = 1;
                        break
                    }
                    i = r.gzindex < r.gzhead.comment.length ? 255 & r.gzhead.comment.charCodeAt(r.gzindex++) : 0,
                    Oe(r, i)
                } while (0 !== i);
                r.gzhead.hcrc && r.pending > s && (e.adler = ee(e.adler, r.pending_buf, r.pending - s, s)),
                0 === i && (r.status = 103)
            } else
                r.status = 103;
        if (103 === r.status && (r.gzhead.hcrc ? (r.pending + 2 > r.pending_buf_size && Ue(e),
        r.pending + 2 <= r.pending_buf_size && (Oe(r, 255 & e.adler),
        Oe(r, e.adler >> 8 & 255),
        e.adler = 0,
        r.status = 113)) : r.status = 113),
        0 !== r.pending) {
            if (Ue(e),
            0 === e.avail_out)
                return r.last_flush = -1,
                pe
        } else if (0 === e.avail_in && ze(t) <= ze(n) && t !== ce)
            return Ae(e, _e);
        if (666 === r.status && 0 !== e.avail_in)
            return Ae(e, _e);
        if (0 !== e.avail_in || 0 !== r.lookahead || t !== le && 666 !== r.status) {
            let s = r.strategy === be ? ((e,t)=>{
                let s;
                for (; ; ) {
                    if (0 === e.lookahead && (Be(e),
                    0 === e.lookahead)) {
                        if (t === le)
                            return 1;
                        break
                    }
                    if (e.match_length = 0,
                    s = ae(e, 0, e.window[e.strstart]),
                    e.lookahead--,
                    e.strstart++,
                    s && (Pe(e, !1),
                    0 === e.strm.avail_out))
                        return 1
                }
                return e.insert = 0,
                t === ce ? (Pe(e, !0),
                0 === e.strm.avail_out ? 3 : 4) : e.last_lit && (Pe(e, !1),
                0 === e.strm.avail_out) ? 1 : 2
            }
            )(r, t) : r.strategy === ve ? ((e,t)=>{
                let s, i, r, n;
                const a = e.window;
                for (; ; ) {
                    if (e.lookahead <= 258) {
                        if (Be(e),
                        e.lookahead <= 258 && t === le)
                            return 1;
                        if (0 === e.lookahead)
                            break
                    }
                    if (e.match_length = 0,
                    e.lookahead >= 3 && e.strstart > 0 && (r = e.strstart - 1,
                    i = a[r],
                    i === a[++r] && i === a[++r] && i === a[++r])) {
                        n = e.strstart + 258;
                        do {} while (i === a[++r] && i === a[++r] && i === a[++r] && i === a[++r] && i === a[++r] && i === a[++r] && i === a[++r] && i === a[++r] && r < n);
                        e.match_length = 258 - (n - r),
                        e.match_length > e.lookahead && (e.match_length = e.lookahead)
                    }
                    if (e.match_length >= 3 ? (s = ae(e, 1, e.match_length - 3),
                    e.lookahead -= e.match_length,
                    e.strstart += e.match_length,
                    e.match_length = 0) : (s = ae(e, 0, e.window[e.strstart]),
                    e.lookahead--,
                    e.strstart++),
                    s && (Pe(e, !1),
                    0 === e.strm.avail_out))
                        return 1
                }
                return e.insert = 0,
                t === ce ? (Pe(e, !0),
                0 === e.strm.avail_out ? 3 : 4) : e.last_lit && (Pe(e, !1),
                0 === e.strm.avail_out) ? 1 : 2
            }
            )(r, t) : Me[r.level].func(r, t);
            if (3 !== s && 4 !== s || (r.status = 666),
            1 === s || 3 === s)
                return 0 === e.avail_out && (r.last_flush = -1),
                pe;
            if (2 === s && (t === he ? oe(r) : t !== ue && (re(r, 0, 0, !1),
            t === de && (Ce(r.head),
            0 === r.lookahead && (r.strstart = 0,
            r.block_start = 0,
            r.insert = 0))),
            Ue(e),
            0 === e.avail_out))
                return r.last_flush = -1,
                pe
        }
        return t !== ce ? pe : r.wrap <= 0 ? fe : (2 === r.wrap ? (Oe(r, 255 & e.adler),
        Oe(r, e.adler >> 8 & 255),
        Oe(r, e.adler >> 16 & 255),
        Oe(r, e.adler >> 24 & 255),
        Oe(r, 255 & e.total_in),
        Oe(r, e.total_in >> 8 & 255),
        Oe(r, e.total_in >> 16 & 255),
        Oe(r, e.total_in >> 24 & 255)) : (Te(r, e.adler >>> 16),
        Te(r, 65535 & e.adler)),
        Ue(e),
        r.wrap > 0 && (r.wrap = -r.wrap),
        0 !== r.pending ? pe : fe)
    }
    ,
    deflateEnd: e=>{
        if (!e || !e.state)
            return me;
        const t = e.state.status;
        return 42 !== t && 69 !== t && 73 !== t && 91 !== t && 103 !== t && 113 !== t && 666 !== t ? Ae(e, me) : (e.state = null,
        113 === t ? Ae(e, ge) : pe)
    }
    ,
    deflateSetDictionary: (e,t)=>{
        let s = t.length;
        if (!e || !e.state)
            return me;
        const i = e.state
          , r = i.wrap;
        if (2 === r || 1 === r && 42 !== i.status || i.lookahead)
            return me;
        if (1 === r && (e.adler = G(e.adler, t, s, 0)),
        i.wrap = 0,
        s >= i.w_size) {
            0 === r && (Ce(i.head),
            i.strstart = 0,
            i.block_start = 0,
            i.insert = 0);
            let e = new Uint8Array(i.w_size);
            e.set(t.subarray(s - i.w_size, s), 0),
            t = e,
            s = i.w_size
        }
        const n = e.avail_in
          , a = e.next_in
          , o = e.input;
        for (e.avail_in = s,
        e.next_in = 0,
        e.input = t,
        Be(i); i.lookahead >= 3; ) {
            let e = i.strstart
              , t = i.lookahead - 2;
            do {
                i.ins_h = Re(i, i.ins_h, i.window[e + 3 - 1]),
                i.prev[e & i.w_mask] = i.head[i.ins_h],
                i.head[i.ins_h] = e,
                e++
            } while (--t);
            i.strstart = e,
            i.lookahead = 2,
            Be(i)
        }
        return i.strstart += i.lookahead,
        i.block_start = i.strstart,
        i.insert = i.lookahead,
        i.lookahead = 0,
        i.match_length = i.prev_length = 2,
        i.match_available = 0,
        e.next_in = a,
        e.input = o,
        e.avail_in = n,
        i.wrap = r,
        pe
    }
    ,
    deflateInfo: "pako deflate (from Nodeca project)"
};
const We = (e,t)=>Object.prototype.hasOwnProperty.call(e, t);
var Xe = function(e) {
    const t = Array.prototype.slice.call(arguments, 1);
    for (; t.length; ) {
        const s = t.shift();
        if (s) {
            if ("object" != typeof s)
                throw new TypeError(s + "must be non-object");
            for (const t in s)
                We(s, t) && (e[t] = s[t])
        }
    }
    return e
}
  , qe = e=>{
    let t = 0;
    for (let s = 0, i = e.length; s < i; s++)
        t += e[s].length;
    const s = new Uint8Array(t);
    for (let t = 0, i = 0, r = e.length; t < r; t++) {
        let r = e[t];
        s.set(r, i),
        i += r.length
    }
    return s
}
;
let Ke = !0;
try {
    String.fromCharCode.apply(null, new Uint8Array(1))
} catch (e) {
    Ke = !1
}
const Ye = new Uint8Array(256);
for (let e = 0; e < 256; e++)
    Ye[e] = e >= 252 ? 6 : e >= 248 ? 5 : e >= 240 ? 4 : e >= 224 ? 3 : e >= 192 ? 2 : 1;
Ye[254] = Ye[254] = 1;
var Je = e=>{
    let t, s, i, r, n, a = e.length, o = 0;
    for (r = 0; r < a; r++)
        s = e.charCodeAt(r),
        55296 == (64512 & s) && r + 1 < a && (i = e.charCodeAt(r + 1),
        56320 == (64512 & i) && (s = 65536 + (s - 55296 << 10) + (i - 56320),
        r++)),
        o += s < 128 ? 1 : s < 2048 ? 2 : s < 65536 ? 3 : 4;
    for (t = new Uint8Array(o),
    n = 0,
    r = 0; n < o; r++)
        s = e.charCodeAt(r),
        55296 == (64512 & s) && r + 1 < a && (i = e.charCodeAt(r + 1),
        56320 == (64512 & i) && (s = 65536 + (s - 55296 << 10) + (i - 56320),
        r++)),
        s < 128 ? t[n++] = s : s < 2048 ? (t[n++] = 192 | s >>> 6,
        t[n++] = 128 | 63 & s) : s < 65536 ? (t[n++] = 224 | s >>> 12,
        t[n++] = 128 | s >>> 6 & 63,
        t[n++] = 128 | 63 & s) : (t[n++] = 240 | s >>> 18,
        t[n++] = 128 | s >>> 12 & 63,
        t[n++] = 128 | s >>> 6 & 63,
        t[n++] = 128 | 63 & s);
    return t
}
  , Ge = (e,t)=>{
    let s, i;
    const r = t || e.length
      , n = new Array(2 * r);
    for (i = 0,
    s = 0; s < r; ) {
        let t = e[s++];
        if (t < 128) {
            n[i++] = t;
            continue
        }
        let a = Ye[t];
        if (a > 4)
            n[i++] = 65533,
            s += a - 1;
        else {
            for (t &= 2 === a ? 31 : 3 === a ? 15 : 7; a > 1 && s < r; )
                t = t << 6 | 63 & e[s++],
                a--;
            a > 1 ? n[i++] = 65533 : t < 65536 ? n[i++] = t : (t -= 65536,
            n[i++] = 55296 | t >> 10 & 1023,
            n[i++] = 56320 | 1023 & t)
        }
    }
    return ((e,t)=>{
        if (t < 65534 && e.subarray && Ke)
            return String.fromCharCode.apply(null, e.length === t ? e : e.subarray(0, t));
        let s = "";
        for (let i = 0; i < t; i++)
            s += String.fromCharCode(e[i]);
        return s
    }
    )(n, i)
}
  , Qe = (e,t)=>{
    (t = t || e.length) > e.length && (t = e.length);
    let s = t - 1;
    for (; s >= 0 && 128 == (192 & e[s]); )
        s--;
    return s < 0 || 0 === s ? t : s + Ye[e[s]] > t ? s : t
}
;
var et = function() {
    this.input = null,
    this.next_in = 0,
    this.avail_in = 0,
    this.total_in = 0,
    this.output = null,
    this.next_out = 0,
    this.avail_out = 0,
    this.total_out = 0,
    this.msg = "",
    this.state = null,
    this.data_type = 2,
    this.adler = 0
};
const tt = Object.prototype.toString
  , {Z_NO_FLUSH: st, Z_SYNC_FLUSH: it, Z_FULL_FLUSH: rt, Z_FINISH: nt, Z_OK: at, Z_STREAM_END: ot, Z_DEFAULT_COMPRESSION: lt, Z_DEFAULT_STRATEGY: ht, Z_DEFLATED: dt} = se;
function ct(e) {
    this.options = Xe({
        level: lt,
        method: dt,
        chunkSize: 16384,
        windowBits: 15,
        memLevel: 8,
        strategy: ht
    }, e || {});
    let t = this.options;
    t.raw && t.windowBits > 0 ? t.windowBits = -t.windowBits : t.gzip && t.windowBits > 0 && t.windowBits < 16 && (t.windowBits += 16),
    this.err = 0,
    this.msg = "",
    this.ended = !1,
    this.chunks = [],
    this.strm = new et,
    this.strm.avail_out = 0;
    let s = Ve.deflateInit2(this.strm, t.level, t.method, t.windowBits, t.memLevel, t.strategy);
    if (s !== at)
        throw new Error(te[s]);
    if (t.header && Ve.deflateSetHeader(this.strm, t.header),
    t.dictionary) {
        let e;
        if (e = "string" == typeof t.dictionary ? Je(t.dictionary) : "[object ArrayBuffer]" === tt.call(t.dictionary) ? new Uint8Array(t.dictionary) : t.dictionary,
        s = Ve.deflateSetDictionary(this.strm, e),
        s !== at)
            throw new Error(te[s]);
        this._dict_set = !0
    }
}
function ut(e, t) {
    const s = new ct(t);
    if (s.push(e, !0),
    s.err)
        throw s.msg || te[s.err];
    return s.result
}
ct.prototype.push = function(e, t) {
    const s = this.strm
      , i = this.options.chunkSize;
    let r, n;
    if (this.ended)
        return !1;
    for (n = t === ~~t ? t : !0 === t ? nt : st,
    "string" == typeof e ? s.input = Je(e) : "[object ArrayBuffer]" === tt.call(e) ? s.input = new Uint8Array(e) : s.input = e,
    s.next_in = 0,
    s.avail_in = s.input.length; ; )
        if (0 === s.avail_out && (s.output = new Uint8Array(i),
        s.next_out = 0,
        s.avail_out = i),
        (n === it || n === rt) && s.avail_out <= 6)
            this.onData(s.output.subarray(0, s.next_out)),
            s.avail_out = 0;
        else {
            if (r = Ve.deflate(s, n),
            r === ot)
                return s.next_out > 0 && this.onData(s.output.subarray(0, s.next_out)),
                r = Ve.deflateEnd(this.strm),
                this.onEnd(r),
                this.ended = !0,
                r === at;
            if (0 !== s.avail_out) {
                if (n > 0 && s.next_out > 0)
                    this.onData(s.output.subarray(0, s.next_out)),
                    s.avail_out = 0;
                else if (0 === s.avail_in)
                    break
            } else
                this.onData(s.output)
        }
    return !0
}
,
ct.prototype.onData = function(e) {
    this.chunks.push(e)
}
,
ct.prototype.onEnd = function(e) {
    e === at && (this.result = qe(this.chunks)),
    this.chunks = [],
    this.err = e,
    this.msg = this.strm.msg
}
;
var pt = {
    Deflate: ct,
    deflate: ut,
    deflateRaw: function(e, t) {
        return (t = t || {}).raw = !0,
        ut(e, t)
    },
    gzip: function(e, t) {
        return (t = t || {}).gzip = !0,
        ut(e, t)
    },
    constants: se
};
var ft = function(e, t) {
    let s, i, r, n, a, o, l, h, d, c, u, p, f, m, g, _, w, y, b, v, S, k, x, E;
    const A = e.state;
    s = e.next_in,
    x = e.input,
    i = s + (e.avail_in - 5),
    r = e.next_out,
    E = e.output,
    n = r - (t - e.avail_out),
    a = r + (e.avail_out - 257),
    o = A.dmax,
    l = A.wsize,
    h = A.whave,
    d = A.wnext,
    c = A.window,
    u = A.hold,
    p = A.bits,
    f = A.lencode,
    m = A.distcode,
    g = (1 << A.lenbits) - 1,
    _ = (1 << A.distbits) - 1;
    e: do {
        p < 15 && (u += x[s++] << p,
        p += 8,
        u += x[s++] << p,
        p += 8),
        w = f[u & g];
        t: for (; ; ) {
            if (y = w >>> 24,
            u >>>= y,
            p -= y,
            y = w >>> 16 & 255,
            0 === y)
                E[r++] = 65535 & w;
            else {
                if (!(16 & y)) {
                    if (0 == (64 & y)) {
                        w = f[(65535 & w) + (u & (1 << y) - 1)];
                        continue t
                    }
                    if (32 & y) {
                        A.mode = 12;
                        break e
                    }
                    e.msg = "invalid literal/length code",
                    A.mode = 30;
                    break e
                }
                b = 65535 & w,
                y &= 15,
                y && (p < y && (u += x[s++] << p,
                p += 8),
                b += u & (1 << y) - 1,
                u >>>= y,
                p -= y),
                p < 15 && (u += x[s++] << p,
                p += 8,
                u += x[s++] << p,
                p += 8),
                w = m[u & _];
                s: for (; ; ) {
                    if (y = w >>> 24,
                    u >>>= y,
                    p -= y,
                    y = w >>> 16 & 255,
                    !(16 & y)) {
                        if (0 == (64 & y)) {
                            w = m[(65535 & w) + (u & (1 << y) - 1)];
                            continue s
                        }
                        e.msg = "invalid distance code",
                        A.mode = 30;
                        break e
                    }
                    if (v = 65535 & w,
                    y &= 15,
                    p < y && (u += x[s++] << p,
                    p += 8,
                    p < y && (u += x[s++] << p,
                    p += 8)),
                    v += u & (1 << y) - 1,
                    v > o) {
                        e.msg = "invalid distance too far back",
                        A.mode = 30;
                        break e
                    }
                    if (u >>>= y,
                    p -= y,
                    y = r - n,
                    v > y) {
                        if (y = v - y,
                        y > h && A.sane) {
                            e.msg = "invalid distance too far back",
                            A.mode = 30;
                            break e
                        }
                        if (S = 0,
                        k = c,
                        0 === d) {
                            if (S += l - y,
                            y < b) {
                                b -= y;
                                do {
                                    E[r++] = c[S++]
                                } while (--y);
                                S = r - v,
                                k = E
                            }
                        } else if (d < y) {
                            if (S += l + d - y,
                            y -= d,
                            y < b) {
                                b -= y;
                                do {
                                    E[r++] = c[S++]
                                } while (--y);
                                if (S = 0,
                                d < b) {
                                    y = d,
                                    b -= y;
                                    do {
                                        E[r++] = c[S++]
                                    } while (--y);
                                    S = r - v,
                                    k = E
                                }
                            }
                        } else if (S += d - y,
                        y < b) {
                            b -= y;
                            do {
                                E[r++] = c[S++]
                            } while (--y);
                            S = r - v,
                            k = E
                        }
                        for (; b > 2; )
                            E[r++] = k[S++],
                            E[r++] = k[S++],
                            E[r++] = k[S++],
                            b -= 3;
                        b && (E[r++] = k[S++],
                        b > 1 && (E[r++] = k[S++]))
                    } else {
                        S = r - v;
                        do {
                            E[r++] = E[S++],
                            E[r++] = E[S++],
                            E[r++] = E[S++],
                            b -= 3
                        } while (b > 2);
                        b && (E[r++] = E[S++],
                        b > 1 && (E[r++] = E[S++]))
                    }
                    break
                }
            }
            break
        }
    } while (s < i && r < a);
    b = p >> 3,
    s -= b,
    p -= b << 3,
    u &= (1 << p) - 1,
    e.next_in = s,
    e.next_out = r,
    e.avail_in = s < i ? i - s + 5 : 5 - (s - i),
    e.avail_out = r < a ? a - r + 257 : 257 - (r - a),
    A.hold = u,
    A.bits = p
};
const mt = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0])
  , gt = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78])
  , _t = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0])
  , wt = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
var yt = (e,t,s,i,r,n,a,o)=>{
    const l = o.bits;
    let h, d, c, u, p, f, m = 0, g = 0, _ = 0, w = 0, y = 0, b = 0, v = 0, S = 0, k = 0, x = 0, E = null, A = 0;
    const z = new Uint16Array(16)
      , C = new Uint16Array(16);
    let R, U, P, O = null, T = 0;
    for (m = 0; m <= 15; m++)
        z[m] = 0;
    for (g = 0; g < i; g++)
        z[t[s + g]]++;
    for (y = l,
    w = 15; w >= 1 && 0 === z[w]; w--)
        ;
    if (y > w && (y = w),
    0 === w)
        return r[n++] = 20971520,
        r[n++] = 20971520,
        o.bits = 1,
        0;
    for (_ = 1; _ < w && 0 === z[_]; _++)
        ;
    for (y < _ && (y = _),
    S = 1,
    m = 1; m <= 15; m++)
        if (S <<= 1,
        S -= z[m],
        S < 0)
            return -1;
    if (S > 0 && (0 === e || 1 !== w))
        return -1;
    for (C[1] = 0,
    m = 1; m < 15; m++)
        C[m + 1] = C[m] + z[m];
    for (g = 0; g < i; g++)
        0 !== t[s + g] && (a[C[t[s + g]]++] = g);
    if (0 === e ? (E = O = a,
    f = 19) : 1 === e ? (E = mt,
    A -= 257,
    O = gt,
    T -= 257,
    f = 256) : (E = _t,
    O = wt,
    f = -1),
    x = 0,
    g = 0,
    m = _,
    p = n,
    b = y,
    v = 0,
    c = -1,
    k = 1 << y,
    u = k - 1,
    1 === e && k > 852 || 2 === e && k > 592)
        return 1;
    for (; ; ) {
        R = m - v,
        a[g] < f ? (U = 0,
        P = a[g]) : a[g] > f ? (U = O[T + a[g]],
        P = E[A + a[g]]) : (U = 96,
        P = 0),
        h = 1 << m - v,
        d = 1 << b,
        _ = d;
        do {
            d -= h,
            r[p + (x >> v) + d] = R << 24 | U << 16 | P | 0
        } while (0 !== d);
        for (h = 1 << m - 1; x & h; )
            h >>= 1;
        if (0 !== h ? (x &= h - 1,
        x += h) : x = 0,
        g++,
        0 == --z[m]) {
            if (m === w)
                break;
            m = t[s + a[g]]
        }
        if (m > y && (x & u) !== c) {
            for (0 === v && (v = y),
            p += _,
            b = m - v,
            S = 1 << b; b + v < w && (S -= z[b + v],
            !(S <= 0)); )
                b++,
                S <<= 1;
            if (k += 1 << b,
            1 === e && k > 852 || 2 === e && k > 592)
                return 1;
            c = x & u,
            r[c] = y << 24 | b << 16 | p - n | 0
        }
    }
    return 0 !== x && (r[p + x] = m - v << 24 | 64 << 16 | 0),
    o.bits = y,
    0
}
;
const {Z_FINISH: bt, Z_BLOCK: vt, Z_TREES: St, Z_OK: kt, Z_STREAM_END: xt, Z_NEED_DICT: Et, Z_STREAM_ERROR: At, Z_DATA_ERROR: zt, Z_MEM_ERROR: Ct, Z_BUF_ERROR: Rt, Z_DEFLATED: Ut} = se
  , Pt = e=>(e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24);
function Ot() {
    this.mode = 0,
    this.last = !1,
    this.wrap = 0,
    this.havedict = !1,
    this.flags = 0,
    this.dmax = 0,
    this.check = 0,
    this.total = 0,
    this.head = null,
    this.wbits = 0,
    this.wsize = 0,
    this.whave = 0,
    this.wnext = 0,
    this.window = null,
    this.hold = 0,
    this.bits = 0,
    this.length = 0,
    this.offset = 0,
    this.extra = 0,
    this.lencode = null,
    this.distcode = null,
    this.lenbits = 0,
    this.distbits = 0,
    this.ncode = 0,
    this.nlen = 0,
    this.ndist = 0,
    this.have = 0,
    this.next = null,
    this.lens = new Uint16Array(320),
    this.work = new Uint16Array(288),
    this.lendyn = null,
    this.distdyn = null,
    this.sane = 0,
    this.back = 0,
    this.was = 0
}
const Tt = e=>{
    if (!e || !e.state)
        return At;
    const t = e.state;
    return e.total_in = e.total_out = t.total = 0,
    e.msg = "",
    t.wrap && (e.adler = 1 & t.wrap),
    t.mode = 1,
    t.last = 0,
    t.havedict = 0,
    t.dmax = 32768,
    t.head = null,
    t.hold = 0,
    t.bits = 0,
    t.lencode = t.lendyn = new Int32Array(852),
    t.distcode = t.distdyn = new Int32Array(592),
    t.sane = 1,
    t.back = -1,
    kt
}
  , It = e=>{
    if (!e || !e.state)
        return At;
    const t = e.state;
    return t.wsize = 0,
    t.whave = 0,
    t.wnext = 0,
    Tt(e)
}
  , Nt = (e,t)=>{
    let s;
    if (!e || !e.state)
        return At;
    const i = e.state;
    return t < 0 ? (s = 0,
    t = -t) : (s = 1 + (t >> 4),
    t < 48 && (t &= 15)),
    t && (t < 8 || t > 15) ? At : (null !== i.window && i.wbits !== t && (i.window = null),
    i.wrap = s,
    i.wbits = t,
    It(e))
}
  , Bt = (e,t)=>{
    if (!e)
        return At;
    const s = new Ot;
    e.state = s,
    s.window = null;
    const i = Nt(e, t);
    return i !== kt && (e.state = null),
    i
}
;
let Ft, $t, Dt = !0;
const Mt = e=>{
    if (Dt) {
        Ft = new Int32Array(512),
        $t = new Int32Array(32);
        let t = 0;
        for (; t < 144; )
            e.lens[t++] = 8;
        for (; t < 256; )
            e.lens[t++] = 9;
        for (; t < 280; )
            e.lens[t++] = 7;
        for (; t < 288; )
            e.lens[t++] = 8;
        for (yt(1, e.lens, 0, 288, Ft, 0, e.work, {
            bits: 9
        }),
        t = 0; t < 32; )
            e.lens[t++] = 5;
        yt(2, e.lens, 0, 32, $t, 0, e.work, {
            bits: 5
        }),
        Dt = !1
    }
    e.lencode = Ft,
    e.lenbits = 9,
    e.distcode = $t,
    e.distbits = 5
}
  , Lt = (e,t,s,i)=>{
    let r;
    const n = e.state;
    return null === n.window && (n.wsize = 1 << n.wbits,
    n.wnext = 0,
    n.whave = 0,
    n.window = new Uint8Array(n.wsize)),
    i >= n.wsize ? (n.window.set(t.subarray(s - n.wsize, s), 0),
    n.wnext = 0,
    n.whave = n.wsize) : (r = n.wsize - n.wnext,
    r > i && (r = i),
    n.window.set(t.subarray(s - i, s - i + r), n.wnext),
    (i -= r) ? (n.window.set(t.subarray(s - i, s), 0),
    n.wnext = i,
    n.whave = n.wsize) : (n.wnext += r,
    n.wnext === n.wsize && (n.wnext = 0),
    n.whave < n.wsize && (n.whave += r))),
    0
}
;
var Ht = {
    inflateReset: It,
    inflateReset2: Nt,
    inflateResetKeep: Tt,
    inflateInit: e=>Bt(e, 15),
    inflateInit2: Bt,
    inflate: (e,t)=>{
        let s, i, r, n, a, o, l, h, d, c, u, p, f, m, g, _, w, y, b, v, S, k, x = 0;
        const E = new Uint8Array(4);
        let A, z;
        const C = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
        if (!e || !e.state || !e.output || !e.input && 0 !== e.avail_in)
            return At;
        s = e.state,
        12 === s.mode && (s.mode = 13),
        a = e.next_out,
        r = e.output,
        l = e.avail_out,
        n = e.next_in,
        i = e.input,
        o = e.avail_in,
        h = s.hold,
        d = s.bits,
        c = o,
        u = l,
        k = kt;
        e: for (; ; )
            switch (s.mode) {
            case 1:
                if (0 === s.wrap) {
                    s.mode = 13;
                    break
                }
                for (; d < 16; ) {
                    if (0 === o)
                        break e;
                    o--,
                    h += i[n++] << d,
                    d += 8
                }
                if (2 & s.wrap && 35615 === h) {
                    s.check = 0,
                    E[0] = 255 & h,
                    E[1] = h >>> 8 & 255,
                    s.check = ee(s.check, E, 2, 0),
                    h = 0,
                    d = 0,
                    s.mode = 2;
                    break
                }
                if (s.flags = 0,
                s.head && (s.head.done = !1),
                !(1 & s.wrap) || (((255 & h) << 8) + (h >> 8)) % 31) {
                    e.msg = "incorrect header check",
                    s.mode = 30;
                    break
                }
                if ((15 & h) !== Ut) {
                    e.msg = "unknown compression method",
                    s.mode = 30;
                    break
                }
                if (h >>>= 4,
                d -= 4,
                S = 8 + (15 & h),
                0 === s.wbits)
                    s.wbits = S;
                else if (S > s.wbits) {
                    e.msg = "invalid window size",
                    s.mode = 30;
                    break
                }
                s.dmax = 1 << s.wbits,
                e.adler = s.check = 1,
                s.mode = 512 & h ? 10 : 12,
                h = 0,
                d = 0;
                break;
            case 2:
                for (; d < 16; ) {
                    if (0 === o)
                        break e;
                    o--,
                    h += i[n++] << d,
                    d += 8
                }
                if (s.flags = h,
                (255 & s.flags) !== Ut) {
                    e.msg = "unknown compression method",
                    s.mode = 30;
                    break
                }
                if (57344 & s.flags) {
                    e.msg = "unknown header flags set",
                    s.mode = 30;
                    break
                }
                s.head && (s.head.text = h >> 8 & 1),
                512 & s.flags && (E[0] = 255 & h,
                E[1] = h >>> 8 & 255,
                s.check = ee(s.check, E, 2, 0)),
                h = 0,
                d = 0,
                s.mode = 3;
            case 3:
                for (; d < 32; ) {
                    if (0 === o)
                        break e;
                    o--,
                    h += i[n++] << d,
                    d += 8
                }
                s.head && (s.head.time = h),
                512 & s.flags && (E[0] = 255 & h,
                E[1] = h >>> 8 & 255,
                E[2] = h >>> 16 & 255,
                E[3] = h >>> 24 & 255,
                s.check = ee(s.check, E, 4, 0)),
                h = 0,
                d = 0,
                s.mode = 4;
            case 4:
                for (; d < 16; ) {
                    if (0 === o)
                        break e;
                    o--,
                    h += i[n++] << d,
                    d += 8
                }
                s.head && (s.head.xflags = 255 & h,
                s.head.os = h >> 8),
                512 & s.flags && (E[0] = 255 & h,
                E[1] = h >>> 8 & 255,
                s.check = ee(s.check, E, 2, 0)),
                h = 0,
                d = 0,
                s.mode = 5;
            case 5:
                if (1024 & s.flags) {
                    for (; d < 16; ) {
                        if (0 === o)
                            break e;
                        o--,
                        h += i[n++] << d,
                        d += 8
                    }
                    s.length = h,
                    s.head && (s.head.extra_len = h),
                    512 & s.flags && (E[0] = 255 & h,
                    E[1] = h >>> 8 & 255,
                    s.check = ee(s.check, E, 2, 0)),
                    h = 0,
                    d = 0
                } else
                    s.head && (s.head.extra = null);
                s.mode = 6;
            case 6:
                if (1024 & s.flags && (p = s.length,
                p > o && (p = o),
                p && (s.head && (S = s.head.extra_len - s.length,
                s.head.extra || (s.head.extra = new Uint8Array(s.head.extra_len)),
                s.head.extra.set(i.subarray(n, n + p), S)),
                512 & s.flags && (s.check = ee(s.check, i, p, n)),
                o -= p,
                n += p,
                s.length -= p),
                s.length))
                    break e;
                s.length = 0,
                s.mode = 7;
            case 7:
                if (2048 & s.flags) {
                    if (0 === o)
                        break e;
                    p = 0;
                    do {
                        S = i[n + p++],
                        s.head && S && s.length < 65536 && (s.head.name += String.fromCharCode(S))
                    } while (S && p < o);
                    if (512 & s.flags && (s.check = ee(s.check, i, p, n)),
                    o -= p,
                    n += p,
                    S)
                        break e
                } else
                    s.head && (s.head.name = null);
                s.length = 0,
                s.mode = 8;
            case 8:
                if (4096 & s.flags) {
                    if (0 === o)
                        break e;
                    p = 0;
                    do {
                        S = i[n + p++],
                        s.head && S && s.length < 65536 && (s.head.comment += String.fromCharCode(S))
                    } while (S && p < o);
                    if (512 & s.flags && (s.check = ee(s.check, i, p, n)),
                    o -= p,
                    n += p,
                    S)
                        break e
                } else
                    s.head && (s.head.comment = null);
                s.mode = 9;
            case 9:
                if (512 & s.flags) {
                    for (; d < 16; ) {
                        if (0 === o)
                            break e;
                        o--,
                        h += i[n++] << d,
                        d += 8
                    }
                    if (h !== (65535 & s.check)) {
                        e.msg = "header crc mismatch",
                        s.mode = 30;
                        break
                    }
                    h = 0,
                    d = 0
                }
                s.head && (s.head.hcrc = s.flags >> 9 & 1,
                s.head.done = !0),
                e.adler = s.check = 0,
                s.mode = 12;
                break;
            case 10:
                for (; d < 32; ) {
                    if (0 === o)
                        break e;
                    o--,
                    h += i[n++] << d,
                    d += 8
                }
                e.adler = s.check = Pt(h),
                h = 0,
                d = 0,
                s.mode = 11;
            case 11:
                if (0 === s.havedict)
                    return e.next_out = a,
                    e.avail_out = l,
                    e.next_in = n,
                    e.avail_in = o,
                    s.hold = h,
                    s.bits = d,
                    Et;
                e.adler = s.check = 1,
                s.mode = 12;
            case 12:
                if (t === vt || t === St)
                    break e;
            case 13:
                if (s.last) {
                    h >>>= 7 & d,
                    d -= 7 & d,
                    s.mode = 27;
                    break
                }
                for (; d < 3; ) {
                    if (0 === o)
                        break e;
                    o--,
                    h += i[n++] << d,
                    d += 8
                }
                switch (s.last = 1 & h,
                h >>>= 1,
                d -= 1,
                3 & h) {
                case 0:
                    s.mode = 14;
                    break;
                case 1:
                    if (Mt(s),
                    s.mode = 20,
                    t === St) {
                        h >>>= 2,
                        d -= 2;
                        break e
                    }
                    break;
                case 2:
                    s.mode = 17;
                    break;
                case 3:
                    e.msg = "invalid block type",
                    s.mode = 30
                }
                h >>>= 2,
                d -= 2;
                break;
            case 14:
                for (h >>>= 7 & d,
                d -= 7 & d; d < 32; ) {
                    if (0 === o)
                        break e;
                    o--,
                    h += i[n++] << d,
                    d += 8
                }
                if ((65535 & h) != (h >>> 16 ^ 65535)) {
                    e.msg = "invalid stored block lengths",
                    s.mode = 30;
                    break
                }
                if (s.length = 65535 & h,
                h = 0,
                d = 0,
                s.mode = 15,
                t === St)
                    break e;
            case 15:
                s.mode = 16;
            case 16:
                if (p = s.length,
                p) {
                    if (p > o && (p = o),
                    p > l && (p = l),
                    0 === p)
                        break e;
                    r.set(i.subarray(n, n + p), a),
                    o -= p,
                    n += p,
                    l -= p,
                    a += p,
                    s.length -= p;
                    break
                }
                s.mode = 12;
                break;
            case 17:
                for (; d < 14; ) {
                    if (0 === o)
                        break e;
                    o--,
                    h += i[n++] << d,
                    d += 8
                }
                if (s.nlen = 257 + (31 & h),
                h >>>= 5,
                d -= 5,
                s.ndist = 1 + (31 & h),
                h >>>= 5,
                d -= 5,
                s.ncode = 4 + (15 & h),
                h >>>= 4,
                d -= 4,
                s.nlen > 286 || s.ndist > 30) {
                    e.msg = "too many length or distance symbols",
                    s.mode = 30;
                    break
                }
                s.have = 0,
                s.mode = 18;
            case 18:
                for (; s.have < s.ncode; ) {
                    for (; d < 3; ) {
                        if (0 === o)
                            break e;
                        o--,
                        h += i[n++] << d,
                        d += 8
                    }
                    s.lens[C[s.have++]] = 7 & h,
                    h >>>= 3,
                    d -= 3
                }
                for (; s.have < 19; )
                    s.lens[C[s.have++]] = 0;
                if (s.lencode = s.lendyn,
                s.lenbits = 7,
                A = {
                    bits: s.lenbits
                },
                k = yt(0, s.lens, 0, 19, s.lencode, 0, s.work, A),
                s.lenbits = A.bits,
                k) {
                    e.msg = "invalid code lengths set",
                    s.mode = 30;
                    break
                }
                s.have = 0,
                s.mode = 19;
            case 19:
                for (; s.have < s.nlen + s.ndist; ) {
                    for (; x = s.lencode[h & (1 << s.lenbits) - 1],
                    g = x >>> 24,
                    _ = x >>> 16 & 255,
                    w = 65535 & x,
                    !(g <= d); ) {
                        if (0 === o)
                            break e;
                        o--,
                        h += i[n++] << d,
                        d += 8
                    }
                    if (w < 16)
                        h >>>= g,
                        d -= g,
                        s.lens[s.have++] = w;
                    else {
                        if (16 === w) {
                            for (z = g + 2; d < z; ) {
                                if (0 === o)
                                    break e;
                                o--,
                                h += i[n++] << d,
                                d += 8
                            }
                            if (h >>>= g,
                            d -= g,
                            0 === s.have) {
                                e.msg = "invalid bit length repeat",
                                s.mode = 30;
                                break
                            }
                            S = s.lens[s.have - 1],
                            p = 3 + (3 & h),
                            h >>>= 2,
                            d -= 2
                        } else if (17 === w) {
                            for (z = g + 3; d < z; ) {
                                if (0 === o)
                                    break e;
                                o--,
                                h += i[n++] << d,
                                d += 8
                            }
                            h >>>= g,
                            d -= g,
                            S = 0,
                            p = 3 + (7 & h),
                            h >>>= 3,
                            d -= 3
                        } else {
                            for (z = g + 7; d < z; ) {
                                if (0 === o)
                                    break e;
                                o--,
                                h += i[n++] << d,
                                d += 8
                            }
                            h >>>= g,
                            d -= g,
                            S = 0,
                            p = 11 + (127 & h),
                            h >>>= 7,
                            d -= 7
                        }
                        if (s.have + p > s.nlen + s.ndist) {
                            e.msg = "invalid bit length repeat",
                            s.mode = 30;
                            break
                        }
                        for (; p--; )
                            s.lens[s.have++] = S
                    }
                }
                if (30 === s.mode)
                    break;
                if (0 === s.lens[256]) {
                    e.msg = "invalid code -- missing end-of-block",
                    s.mode = 30;
                    break
                }
                if (s.lenbits = 9,
                A = {
                    bits: s.lenbits
                },
                k = yt(1, s.lens, 0, s.nlen, s.lencode, 0, s.work, A),
                s.lenbits = A.bits,
                k) {
                    e.msg = "invalid literal/lengths set",
                    s.mode = 30;
                    break
                }
                if (s.distbits = 6,
                s.distcode = s.distdyn,
                A = {
                    bits: s.distbits
                },
                k = yt(2, s.lens, s.nlen, s.ndist, s.distcode, 0, s.work, A),
                s.distbits = A.bits,
                k) {
                    e.msg = "invalid distances set",
                    s.mode = 30;
                    break
                }
                if (s.mode = 20,
                t === St)
                    break e;
            case 20:
                s.mode = 21;
            case 21:
                if (o >= 6 && l >= 258) {
                    e.next_out = a,
                    e.avail_out = l,
                    e.next_in = n,
                    e.avail_in = o,
                    s.hold = h,
                    s.bits = d,
                    ft(e, u),
                    a = e.next_out,
                    r = e.output,
                    l = e.avail_out,
                    n = e.next_in,
                    i = e.input,
                    o = e.avail_in,
                    h = s.hold,
                    d = s.bits,
                    12 === s.mode && (s.back = -1);
                    break
                }
                for (s.back = 0; x = s.lencode[h & (1 << s.lenbits) - 1],
                g = x >>> 24,
                _ = x >>> 16 & 255,
                w = 65535 & x,
                !(g <= d); ) {
                    if (0 === o)
                        break e;
                    o--,
                    h += i[n++] << d,
                    d += 8
                }
                if (_ && 0 == (240 & _)) {
                    for (y = g,
                    b = _,
                    v = w; x = s.lencode[v + ((h & (1 << y + b) - 1) >> y)],
                    g = x >>> 24,
                    _ = x >>> 16 & 255,
                    w = 65535 & x,
                    !(y + g <= d); ) {
                        if (0 === o)
                            break e;
                        o--,
                        h += i[n++] << d,
                        d += 8
                    }
                    h >>>= y,
                    d -= y,
                    s.back += y
                }
                if (h >>>= g,
                d -= g,
                s.back += g,
                s.length = w,
                0 === _) {
                    s.mode = 26;
                    break
                }
                if (32 & _) {
                    s.back = -1,
                    s.mode = 12;
                    break
                }
                if (64 & _) {
                    e.msg = "invalid literal/length code",
                    s.mode = 30;
                    break
                }
                s.extra = 15 & _,
                s.mode = 22;
            case 22:
                if (s.extra) {
                    for (z = s.extra; d < z; ) {
                        if (0 === o)
                            break e;
                        o--,
                        h += i[n++] << d,
                        d += 8
                    }
                    s.length += h & (1 << s.extra) - 1,
                    h >>>= s.extra,
                    d -= s.extra,
                    s.back += s.extra
                }
                s.was = s.length,
                s.mode = 23;
            case 23:
                for (; x = s.distcode[h & (1 << s.distbits) - 1],
                g = x >>> 24,
                _ = x >>> 16 & 255,
                w = 65535 & x,
                !(g <= d); ) {
                    if (0 === o)
                        break e;
                    o--,
                    h += i[n++] << d,
                    d += 8
                }
                if (0 == (240 & _)) {
                    for (y = g,
                    b = _,
                    v = w; x = s.distcode[v + ((h & (1 << y + b) - 1) >> y)],
                    g = x >>> 24,
                    _ = x >>> 16 & 255,
                    w = 65535 & x,
                    !(y + g <= d); ) {
                        if (0 === o)
                            break e;
                        o--,
                        h += i[n++] << d,
                        d += 8
                    }
                    h >>>= y,
                    d -= y,
                    s.back += y
                }
                if (h >>>= g,
                d -= g,
                s.back += g,
                64 & _) {
                    e.msg = "invalid distance code",
                    s.mode = 30;
                    break
                }
                s.offset = w,
                s.extra = 15 & _,
                s.mode = 24;
            case 24:
                if (s.extra) {
                    for (z = s.extra; d < z; ) {
                        if (0 === o)
                            break e;
                        o--,
                        h += i[n++] << d,
                        d += 8
                    }
                    s.offset += h & (1 << s.extra) - 1,
                    h >>>= s.extra,
                    d -= s.extra,
                    s.back += s.extra
                }
                if (s.offset > s.dmax) {
                    e.msg = "invalid distance too far back",
                    s.mode = 30;
                    break
                }
                s.mode = 25;
            case 25:
                if (0 === l)
                    break e;
                if (p = u - l,
                s.offset > p) {
                    if (p = s.offset - p,
                    p > s.whave && s.sane) {
                        e.msg = "invalid distance too far back",
                        s.mode = 30;
                        break
                    }
                    p > s.wnext ? (p -= s.wnext,
                    f = s.wsize - p) : f = s.wnext - p,
                    p > s.length && (p = s.length),
                    m = s.window
                } else
                    m = r,
                    f = a - s.offset,
                    p = s.length;
                p > l && (p = l),
                l -= p,
                s.length -= p;
                do {
                    r[a++] = m[f++]
                } while (--p);
                0 === s.length && (s.mode = 21);
                break;
            case 26:
                if (0 === l)
                    break e;
                r[a++] = s.length,
                l--,
                s.mode = 21;
                break;
            case 27:
                if (s.wrap) {
                    for (; d < 32; ) {
                        if (0 === o)
                            break e;
                        o--,
                        h |= i[n++] << d,
                        d += 8
                    }
                    if (u -= l,
                    e.total_out += u,
                    s.total += u,
                    u && (e.adler = s.check = s.flags ? ee(s.check, r, u, a - u) : G(s.check, r, u, a - u)),
                    u = l,
                    (s.flags ? h : Pt(h)) !== s.check) {
                        e.msg = "incorrect data check",
                        s.mode = 30;
                        break
                    }
                    h = 0,
                    d = 0
                }
                s.mode = 28;
            case 28:
                if (s.wrap && s.flags) {
                    for (; d < 32; ) {
                        if (0 === o)
                            break e;
                        o--,
                        h += i[n++] << d,
                        d += 8
                    }
                    if (h !== (4294967295 & s.total)) {
                        e.msg = "incorrect length check",
                        s.mode = 30;
                        break
                    }
                    h = 0,
                    d = 0
                }
                s.mode = 29;
            case 29:
                k = xt;
                break e;
            case 30:
                k = zt;
                break e;
            case 31:
                return Ct;
            case 32:
            default:
                return At
            }
        return e.next_out = a,
        e.avail_out = l,
        e.next_in = n,
        e.avail_in = o,
        s.hold = h,
        s.bits = d,
        (s.wsize || u !== e.avail_out && s.mode < 30 && (s.mode < 27 || t !== bt)) && Lt(e, e.output, e.next_out, u - e.avail_out),
        c -= e.avail_in,
        u -= e.avail_out,
        e.total_in += c,
        e.total_out += u,
        s.total += u,
        s.wrap && u && (e.adler = s.check = s.flags ? ee(s.check, r, u, e.next_out - u) : G(s.check, r, u, e.next_out - u)),
        e.data_type = s.bits + (s.last ? 64 : 0) + (12 === s.mode ? 128 : 0) + (20 === s.mode || 15 === s.mode ? 256 : 0),
        (0 === c && 0 === u || t === bt) && k === kt && (k = Rt),
        k
    }
    ,
    inflateEnd: e=>{
        if (!e || !e.state)
            return At;
        let t = e.state;
        return t.window && (t.window = null),
        e.state = null,
        kt
    }
    ,
    inflateGetHeader: (e,t)=>{
        if (!e || !e.state)
            return At;
        const s = e.state;
        return 0 == (2 & s.wrap) ? At : (s.head = t,
        t.done = !1,
        kt)
    }
    ,
    inflateSetDictionary: (e,t)=>{
        const s = t.length;
        let i, r, n;
        return e && e.state ? (i = e.state,
        0 !== i.wrap && 11 !== i.mode ? At : 11 === i.mode && (r = 1,
        r = G(r, t, s, 0),
        r !== i.check) ? zt : (n = Lt(e, t, s, s),
        n ? (i.mode = 31,
        Ct) : (i.havedict = 1,
        kt))) : At
    }
    ,
    inflateInfo: "pako inflate (from Nodeca project)"
};
var Zt = function() {
    this.text = 0,
    this.time = 0,
    this.xflags = 0,
    this.os = 0,
    this.extra = null,
    this.extra_len = 0,
    this.name = "",
    this.comment = "",
    this.hcrc = 0,
    this.done = !1
};
const jt = Object.prototype.toString
  , {Z_NO_FLUSH: Vt, Z_FINISH: Wt, Z_OK: Xt, Z_STREAM_END: qt, Z_NEED_DICT: Kt, Z_STREAM_ERROR: Yt, Z_DATA_ERROR: Jt, Z_MEM_ERROR: Gt} = se;
function Qt(e) {
    this.options = Xe({
        chunkSize: 65536,
        windowBits: 15,
        to: ""
    }, e || {});
    const t = this.options;
    t.raw && t.windowBits >= 0 && t.windowBits < 16 && (t.windowBits = -t.windowBits,
    0 === t.windowBits && (t.windowBits = -15)),
    !(t.windowBits >= 0 && t.windowBits < 16) || e && e.windowBits || (t.windowBits += 32),
    t.windowBits > 15 && t.windowBits < 48 && 0 == (15 & t.windowBits) && (t.windowBits |= 15),
    this.err = 0,
    this.msg = "",
    this.ended = !1,
    this.chunks = [],
    this.strm = new et,
    this.strm.avail_out = 0;
    let s = Ht.inflateInit2(this.strm, t.windowBits);
    if (s !== Xt)
        throw new Error(te[s]);
    if (this.header = new Zt,
    Ht.inflateGetHeader(this.strm, this.header),
    t.dictionary && ("string" == typeof t.dictionary ? t.dictionary = Je(t.dictionary) : "[object ArrayBuffer]" === jt.call(t.dictionary) && (t.dictionary = new Uint8Array(t.dictionary)),
    t.raw && (s = Ht.inflateSetDictionary(this.strm, t.dictionary),
    s !== Xt)))
        throw new Error(te[s])
}
Qt.prototype.push = function(e, t) {
    const s = this.strm
      , i = this.options.chunkSize
      , r = this.options.dictionary;
    let n, a, o;
    if (this.ended)
        return !1;
    for (a = t === ~~t ? t : !0 === t ? Wt : Vt,
    "[object ArrayBuffer]" === jt.call(e) ? s.input = new Uint8Array(e) : s.input = e,
    s.next_in = 0,
    s.avail_in = s.input.length; ; ) {
        for (0 === s.avail_out && (s.output = new Uint8Array(i),
        s.next_out = 0,
        s.avail_out = i),
        n = Ht.inflate(s, a),
        n === Kt && r && (n = Ht.inflateSetDictionary(s, r),
        n === Xt ? n = Ht.inflate(s, a) : n === Jt && (n = Kt)); s.avail_in > 0 && n === qt && s.state.wrap > 0 && 0 !== e[s.next_in]; )
            Ht.inflateReset(s),
            n = Ht.inflate(s, a);
        switch (n) {
        case Yt:
        case Jt:
        case Kt:
        case Gt:
            return this.onEnd(n),
            this.ended = !0,
            !1
        }
        if (o = s.avail_out,
        s.next_out && (0 === s.avail_out || n === qt))
            if ("string" === this.options.to) {
                let e = Qe(s.output, s.next_out)
                  , t = s.next_out - e
                  , r = Ge(s.output, e);
                s.next_out = t,
                s.avail_out = i - t,
                t && s.output.set(s.output.subarray(e, e + t), 0),
                this.onData(r)
            } else
                this.onData(s.output.length === s.next_out ? s.output : s.output.subarray(0, s.next_out));
        if (n !== Xt || 0 !== o) {
            if (n === qt)
                return n = Ht.inflateEnd(this.strm),
                this.onEnd(n),
                this.ended = !0,
                !0;
            if (0 === s.avail_in)
                break
        }
    }
    return !0
}
,
Qt.prototype.onData = function(e) {
    this.chunks.push(e)
}
,
Qt.prototype.onEnd = function(e) {
    e === Xt && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = qe(this.chunks)),
    this.chunks = [],
    this.err = e,
    this.msg = this.strm.msg
}
;
const {Deflate: es, deflate: ts, deflateRaw: ss, gzip: is} = pt;
var rs = ts;
class ns extends EventTarget {
    constructor(e, t, s) {
        super(),
        this.port = e,
        this.logger = t,
        this._parent = s,
        this.chipName = null,
        this._efuses = new Array(4).fill(0),
        this._flashsize = 4194304,
        this.debug = !1,
        this.IS_STUB = !1,
        this.connected = !0,
        this.stopReadLoop = !1,
        this.flashSize = null
    }
    get _inputBuffer() {
        return this._parent ? this._parent._inputBuffer : this.__inputBuffer
    }
    async initialize() {
        await this.hardReset(!0),
        this._parent || (this.__inputBuffer = [],
        this.readLoop()),
        await this.sync();
        let e, t = await this.readRegister(1073745920), s = g[t];
        if (void 0 === s)
            throw new Error(`Unknown Chip: Hex: ${r(t, 8).toLowerCase()} Number: ${t}`);
        this.chipName = s.name,
        this.chipFamily = s.family,
        this.chipFamily == u ? e = 1072693328 : (this.chipFamily == p || this.chipFamily == f) && (e = 1610719232);
        for (let t = 0; t < 4; t++)
            this._efuses[t] = await this.readRegister(e + 4 * t);
        this.logger.log(`Chip type ${this.chipName}`)
    }
    async readLoop() {
        this.logger.debug("Starting read loop"),
        this._reader = this.port.readable.getReader();
        try {
            for (; !this.stopReadLoop; ) {
                const {value: e, done: t} = await this._reader.read();
                if (t) {
                    this._reader.releaseLock();
                    break
                }
                e && 0 !== e.length && this._inputBuffer.push(...Array.from(e))
            }
        } catch (e) {
            console.error("Read loop got disconnected"),
            this.connected = !1,
            this.dispatchEvent(new Event("disconnect"))
        }
        this.logger.debug("Finished read loop")
    }
    async hardReset(e=!1) {
        this.logger.log("Try hard reset."),
        await this.port.setSignals({
            dataTerminalReady: !1,
            requestToSend: !0
        }),
        await this.port.setSignals({
            dataTerminalReady: e,
            requestToSend: !1
        }),
        await new Promise((e=>setTimeout(e, 1e3)))
    }
    macAddr() {
        let e, t = new Array(6).fill(0), s = this._efuses[0], i = this._efuses[1], r = this._efuses[2], n = this._efuses[3];
        if (this.chipFamily == u) {
            if (0 != n)
                e = [n >> 16 & 255, n >> 8 & 255, 255 & n];
            else if (0 == (i >> 16 & 255))
                e = [24, 254, 52];
            else {
                if (1 != (i >> 16 & 255))
                    throw new Error("Couldnt determine OUI");
                e = [172, 208, 116]
            }
            t[0] = e[0],
            t[1] = e[1],
            t[2] = e[2],
            t[3] = i >> 8 & 255,
            t[4] = 255 & i,
            t[5] = s >> 24 & 255
        } else if (this.chipFamily == p)
            t[0] = r >> 8 & 255,
            t[1] = 255 & r,
            t[2] = i >> 24 & 255,
            t[3] = i >> 16 & 255,
            t[4] = i >> 8 & 255,
            t[5] = 255 & i;
        else {
            if (this.chipFamily != f)
                throw new Error("Unknown chip family");
            t[0] = r >> 8 & 255,
            t[1] = 255 & r,
            t[2] = i >> 24 & 255,
            t[3] = i >> 16 & 255,
            t[4] = i >> 8 & 255,
            t[5] = 255 & i
        }
        return t
    }
    async readRegister(e) {
        this.debug && this.logger.debug("Reading Register", e);
        let t = s("I", e)
          , r = (await this.checkCommand(10, t))[0];
        return i("I", r)[0]
    }
    async checkCommand(e, t, s=0, i=3e3) {
        i = Math.min(i, 12e5),
        await this.sendCommand(e, t, s);
        let[n,a] = await this.getResponse(e, i);
        if (null === a)
            throw new Error("Didn't get enough status bytes");
        let o = 0;
        if (this.IS_STUB || this.chipFamily == u ? o = 2 : [p, f].includes(this.chipFamily) ? o = 4 : [2, 4].includes(a.length) && (o = a.length),
        a.length < o)
            throw new Error("Didn't get enough status bytes");
        let l = a.slice(-o, a.length);
        if (a = a.slice(0, -o),
        this.debug && (this.logger.debug("status", l),
        this.logger.debug("value", n),
        this.logger.debug("data", a)),
        1 == l[0])
            throw 5 == l[1] ? new Error("Invalid (unsupported) command " + r(e)) : new Error("Command failure error code " + r(l[1]));
        return [n, a]
    }
    async sendCommand(t, i, r=0) {
        this._inputBuffer.length = 0;
        let n = [192, 0];
        n.push(t),
        n = n.concat(s("H", i.length)),
        n = n.concat(e(s("I", r))),
        n = n.concat(e(i)),
        n.push(192),
        this.debug && this.logger.debug("Writing " + n.length + " byte" + (1 == n.length ? "" : "s") + ":", n),
        await this.writeToStream(n)
    }
    async getResponse(e, t=3e3) {
        let s = []
          , i = 0
          , r = !1
          , a = Date.now();
        for (; Date.now() - a < t; ) {
            if (this._inputBuffer.length > 0) {
                let e = this._inputBuffer.shift();
                219 == e ? r = !0 : r ? (221 == e ? s.push(220) : 220 == e ? s.push(192) : s = s.concat([219, e]),
                r = !1) : s.push(e)
            } else
                await n(10);
            if (s.length > 0 && 192 != s[0] && s.shift(),
            s.length > 1 && 1 != s[1] && s.shift(),
            s.length > 2 && s[2] != e && s.shift(),
            s.length > 4 && (i = s[3] + (s[4] << 8)),
            s.length == i + 10)
                break
        }
        if (s.length != i + 10)
            return this.logger.log("Timed out after " + t + " milliseconds"),
            [null, null];
        this.debug && this.logger.debug("Reading " + s.length + " byte" + (1 == s.length ? "" : "s") + ":", s);
        let o = s.slice(5, 9)
          , l = s.slice(9, -1);
        return this.debug && this.logger.debug("value:", o, "data:", l),
        [o, l]
    }
    async readBuffer(e=3e3) {
        let t = []
          , s = !1
          , i = Date.now();
        for (; Date.now() - i < e; ) {
            if (this._inputBuffer.length > 0) {
                let e = this._inputBuffer.shift();
                219 == e ? s = !0 : s ? (221 == e ? t.push(220) : 220 == e ? t.push(192) : t = t.concat([219, e]),
                s = !1) : t.push(e)
            } else
                await n(10);
            if (t.length > 0 && 192 != t[0] && t.shift(),
            t.length > 1 && 192 == t[t.length - 1])
                break
        }
        if (t.length < 2)
            return this.logger.log("Timed out after " + e + " milliseconds"),
            null;
        this.debug && this.logger.debug("Reading " + t.length + " byte" + (1 == t.length ? "" : "s") + ":", t);
        let r = t.slice(1, -1);
        return this.debug && this.logger.debug("data:", r),
        r
    }
    checksum(e, t=239) {
        for (let s of e)
            t ^= s;
        return t
    }
    async setBaudrate(e) {
        if (this.chipFamily == u)
            throw new Error("Changing baud rate is not supported on the ESP8266");
        this.logger.log("Attempting to change baud rate to " + e + "...");
        try {
            let t = s("<II", e, this.IS_STUB ? 115200 : 0);
            await this.checkCommand(15, t)
        } catch (t) {
            throw console.error(t),
            new Error(`Unable to change the baud rate to ${e}: No response from set baud rate command.`)
        }
        this._parent ? await this._parent.reconfigurePort(e) : await this.reconfigurePort(e)
    }
    async reconfigurePort(e) {
        var t, s;
        try {
            this.stopReadLoop = !0,
            await (null === (t = this._reader) || void 0 === t ? void 0 : t.cancel()),
            null === (s = this._reader) || void 0 === s || s.releaseLock(),
            await this.port.close(),
            await this.port.open({
                baudRate: e
            }),
            this.stopReadLoop = !1,
            this.readLoop(),
            this.logger.log(`Changed baud rate to ${e}`)
        } catch (t) {
            throw console.error(t),
            new Error(`Unable to change the baud rate to ${e}: ${t}`)
        }
    }
    async sync() {
        for (let e = 0; e < 5; e++) {
            if (await this._sync())
                return await n(100),
                !0;
            await n(100)
        }
        throw new Error("Couldn't sync to ESP. Try resetting.")
    }
    async _sync() {
        await this.sendCommand(8, c);
        for (let e = 0; e < 8; e++) {
            let[e,t] = await this.getResponse(8, 100);
            if (null !== t && (t.length > 1 && 0 == t[0] && 0 == t[1]))
                return !0
        }
        return !1
    }
    getFlashWriteSize() {
        return this.IS_STUB ? 16384 : 1024
    }
    async flashData(e, t, s=0, i=!1) {
        this.updateImageFlashParams(s, e);
        let n, a = e.byteLength, o = 0;
        i ? (n = rs(new Uint8Array(e), {
            level: 9
        }).buffer,
        o = n.byteLength,
        this.logger.log(`Writing data with filesize: ${a}. Compressed Size: ${o}`),
        await this.flashDeflBegin(a, o, s)) : (this.logger.log(`Writing data with filesize: ${a}`),
        n = e,
        await this.flashBegin(a, s));
        let l = []
          , h = 0
          , d = 0
          , c = 0
          , u = Date.now()
          , p = this.getFlashWriteSize()
          , f = i ? o : a;
        for (; f - c > 0; )
            this.debug && this.logger.log(`Writing at ${r(s + h * p, 8)} `),
            f - c >= p ? l = Array.from(new Uint8Array(n,c,p)) : (l = Array.from(new Uint8Array(n,c,f - c)),
            i || (l = l.concat(new Array(p - l.length).fill(255)))),
            i ? await this.flashDeflBlock(l, h, 2e3) : await this.flashBlock(l, h, 2e3),
            h += 1,
            d += i ? Math.round(l.length * a / o) : l.length,
            c += p,
            t(d, f);
        this.logger.log("Took " + (Date.now() - u) + "ms to write " + f + " bytes"),
        this.IS_STUB && (await this.flashBegin(0, 0),
        i ? await this.flashDeflFinish() : await this.flashFinish())
    }
    async flashBlock(e, t, i=100) {
        await this.checkCommand(3, s("<IIII", e.length, t, 0, 0).concat(e), this.checksum(e), i)
    }
    async flashDeflBlock(e, t, i=100) {
        await this.checkCommand(17, s("<IIII", e.length, t, 0, 0).concat(e), this.checksum(e))
    }
    async flashBegin(e=0, t=0, i=!1) {
        let n, a, o = this.getFlashWriteSize();
        [p, f].includes(this.chipFamily) && await this.checkCommand(13, new Array(8).fill(0)),
        this.chipFamily == p && (a = s("<IIIIII", 0, this._flashsize, 65536, 4096, 256, 65535),
        await this.checkCommand(11, a));
        let l, h = Math.floor((e + o - 1) / o);
        n = this.chipFamily == u ? this.getEraseSize(t, e) : e,
        l = this.IS_STUB ? 3e3 : _(3e4, e);
        let d = Date.now();
        return a = s("<IIII", n, h, o, t),
        this.chipFamily == f && (a = a.concat(s("<I", i ? 1 : 0))),
        this.logger.log("Erase size " + n + ", blocks " + h + ", block size " + o + ", offset " + r(t, 4) + ", encrypted " + (i ? "yes" : "no")),
        await this.checkCommand(2, a, 0, l),
        0 == e || this.IS_STUB || this.logger.log("Took " + (Date.now() - d) + "ms to erase " + h + " bytes"),
        h
    }
    async flashDeflBegin(e=0, t=0, i=0, r=!1) {
        let n, a = this.getFlashWriteSize(), o = Math.floor((t + a - 1) / a), l = Math.floor((e + a - 1) / a), h = 0, d = 0;
        return this.IS_STUB ? (h = e,
        d = 3e3) : (h = l * a,
        d = _(3e4, h)),
        n = s("<IIII", h, o, a, i),
        await this.checkCommand(16, n, 0, d),
        o
    }
    async flashFinish() {
        let e = s("<I", 1);
        await this.checkCommand(4, e)
    }
    async flashDeflFinish() {
        let e = s("<I", 1);
        await this.checkCommand(18, e)
    }
    getBootloaderOffset() {
        var e;
        return this.chipFamily == p || (null === (e = this._parent) || void 0 === e ? void 0 : e.chipFamily) == p ? 4096 : 0
    }
    updateImageFlashParams(e, t) {
        if (t.byteLength < 8)
            return t;
        var i = Array.from(new Uint8Array(t,0,4));
        let n = i[0]
          , d = i[2]
          , c = i[3];
        if (this.logger.debug(`Image header, Magic=${r(n)}, FlashMode=${r(d)}, FlashSizeFreq=${r(c)}`),
        e != this.getBootloaderOffset())
            return t;
        if (233 != n)
            return this.logger.log("Warning: Image file at %s doesn't look like an image file, so not changing any flash settings.", r(e, 4)),
            t;
        this.logger.log("Image being flashed is a bootloader");
        let g = l
          , _ = h
          , w = (e=>{
            switch (e) {
            case p:
            case f:
                return o;
            case u:
                return a;
            case m:
                return o;
            default:
                return a
            }
        }
        )(this.getChipFamily())[this.flashSize ? this.flashSize : "4MB"]
          , y = s("BB", g, w + _)
          , b = new Uint8Array(t,2,2);
        return y[0] != b[0] || y[1] != b[1] ? (b[0] = y[0],
        b[1] = y[1],
        this.logger.log(`Patching Flash parameters header bytes to ${r(y[0], 2)} ${r(y[1], 2)}`)) : this.logger.log("Flash parameters header did not need patching."),
        t
    }
    async flashId() {
        return await this.runSpiFlashCommand(159, [], 24)
    }
    getChipFamily() {
        return this._parent ? this._parent.chipFamily : this.chipFamily
    }
    async writeRegister(e, t, i=4294967295, r=0, n=0) {
        let a = s("<IIII", e, t, i, r);
        n > 0 && a.concat(s("<IIII", (e=>{
            switch (e) {
            case p:
            case f:
            case u:
                return 1610612856;
            default:
                return -1
            }
        }
        )(this.getChipFamily()), 0, 0, n)),
        await this.checkCommand(9, a)
    }
    async setDataLengths(e, t, s) {
        if (-1 != e.mosiDlenOffs) {
            let i = e.regBase + e.mosiDlenOffs
              , r = e.regBase + e.misoDlenOffs;
            t > 0 && await this.writeRegister(i, t - 1),
            s > 0 && await this.writeRegister(r, s - 1)
        } else {
            let i = e.regBase + e.usr1Offs
              , r = (0 == s ? 0 : s - 1) << 8 | (0 == t ? 0 : t - 1) << 17;
            await this.writeRegister(i, r)
        }
    }
    async waitDone(e, t) {
        for (let s = 0; s < 10; s++) {
            if (0 == (await this.readRegister(e) & t))
                return
        }
        throw Error("SPI command did not complete in time")
    }
    async runSpiFlashCommand(e, t, s=0) {
        let n = (e=>{
            switch (e) {
            case p:
            case f:
                return {
                    regBase: 1072963584,
                    usrOffs: 28,
                    usr1Offs: 32,
                    usr2Offs: 36,
                    mosiDlenOffs: 40,
                    misoDlenOffs: 44,
                    w0Offs: 128
                };
            case u:
                return {
                    regBase: 1610613248,
                    usrOffs: 28,
                    usr1Offs: 32,
                    usr2Offs: 36,
                    mosiDlenOffs: -1,
                    misoDlenOffs: -1,
                    w0Offs: 64
                };
            case m:
                return {
                    regBase: 1610620928,
                    usrOffs: 24,
                    usr1Offs: 28,
                    usr2Offs: 32,
                    mosiDlenOffs: 36,
                    misoDlenOffs: 40,
                    w0Offs: 88
                };
            default:
                return {
                    regBase: -1,
                    usrOffs: -1,
                    usr1Offs: -1,
                    usr2Offs: -1,
                    mosiDlenOffs: -1,
                    misoDlenOffs: -1,
                    w0Offs: -1
                }
            }
        }
        )(this.getChipFamily())
          , a = n.regBase
          , o = a + 0
          , l = a + n.usrOffs
          , h = a + n.usr2Offs
          , d = a + n.w0Offs
          , c = 1 << 18;
        if (s > 32)
            throw new Error("Reading more than 32 bits back from a SPI flash operation is unsupported");
        if (t.length > 64)
            throw new Error("Writing more than 64 bytes of data with one SPI command is unsupported");
        let g = 8 * t.length
          , _ = await this.readRegister(l)
          , w = await this.readRegister(h)
          , y = 1 << 31;
        if (s > 0 && (y |= 268435456),
        g > 0 && (y |= 134217728),
        await this.setDataLengths(n, g, s),
        await this.writeRegister(l, y),
        await this.writeRegister(h, 7 << 28 | e),
        0 == g)
            await this.writeRegister(d, 0);
        else {
            t.concat(new Array(t.length % 4).fill(0));
            let e = i("I".repeat(Math.floor(t.length / 4)), t)
              , s = d;
            this.logger.debug(`Words Length: ${e.length}`);
            for (const t of e)
                this.logger.debug(`Writing word ${r(t)} to register offset ${r(s)}`),
                await this.writeRegister(s, t),
                s += 4
        }
        await this.writeRegister(o, c),
        await this.waitDone(o, c);
        let b = await this.readRegister(d);
        return await this.writeRegister(l, _),
        await this.writeRegister(h, w),
        b
    }
    async detectFlashSize() {
        this.logger.log("Detecting Flash Size");
        let e = await this.flashId()
          , t = 255 & e
          , s = e >> 16 & 255;
        this.logger.debug(`FlashId: ${r(e)}`),
        this.logger.log(`Flash Manufacturer: ${t.toString(16)}`),
        this.logger.log(`Flash Device: ${(e >> 8 & 255).toString(16)}${s.toString(16)}`),
        this.flashSize = d[s],
        this.logger.log(`Auto-detected Flash size: ${this.flashSize}`)
    }
    getEraseSize(e, t) {
        let s = 4096
          , i = Math.floor((t + s - 1) / s)
          , r = 16 - Math.floor(e / s) % 16;
        return i < r && (r = i),
        i < 2 * r ? Math.floor((i + 1) / 2 * s) : (i - r) * s
    }
    async memBegin(e, t, i, r) {
        return await this.checkCommand(5, s("<IIII", e, t, i, r))
    }
    async memBlock(e, t) {
        return await this.checkCommand(7, s("<IIII", e.length, t, 0, 0).concat(e), this.checksum(e))
    }
    async memFinish(e=0) {
        let t = this.IS_STUB ? 3e3 : 50
          , i = s("<II", 0 == e ? 1 : 0, e);
        return await this.checkCommand(6, i, 0, t)
    }
    async runStub() {
        const e = await w(this.chipFamily);
        let t = 2048;
        this.logger.log("Uploading stub...");
        for (let s of ["text", "data"])
            if (Object.keys(e).includes(s)) {
                let i = e[s + "_start"]
                  , r = e[s].length
                  , n = Math.floor((r + t - 1) / t);
                await this.memBegin(r, n, t, i);
                for (let i of Array(n).keys()) {
                    let n = i * t
                      , a = n + t;
                    a > r && (a = r),
                    await this.memBlock(e[s].slice(n, a), i)
                }
            }
        this.logger.log("Running stub..."),
        await this.memFinish(e.entry);
        const s = await this.readBuffer(100)
          , i = String.fromCharCode(...s);
        if ("OHAI" != i)
            throw new Error("Failed to start stub. Unexpected response: " + i);
        this.logger.log("Stub is now running...");
        const r = new as(this.port,this.logger,this);
        return await r.detectFlashSize(),
        r
    }
    async writeToStream(e) {
        const t = this.port.writable.getWriter();
        await t.write(new Uint8Array(e));
        try {
            t.releaseLock()
        } catch (e) {
            console.error("Ignoring release lock error", e)
        }
    }
    async disconnect() {
        this._parent ? await this._parent.disconnect() : (this._reader && await this._reader.cancel(),
        await this.port.writable.getWriter().close(),
        await this.port.close(),
        this.connected = !1)
    }
}
class as extends ns {
    constructor() {
        super(...arguments),
        this.IS_STUB = !0
    }
    async memBegin(e, t, s, i) {
        let n = await w(this.chipFamily)
          , a = i
          , o = i + e;
        console.log(a, o),
        console.log(n.data_start, n.data.length, n.text_start, n.text.length);
        for (let[e,t] of [[n.data_start, n.data_start + n.data.length], [n.text_start, n.text_start + n.text.length]])
            if (a < t && o > e)
                throw new Error("Software loader is resident at " + r(e, 8) + "-" + r(t, 8) + ". Can't load binary at overlapping address range " + r(a, 8) + "-" + r(o, 8) + ". Try changing the binary loading address.")
    }
    async eraseFlash() {
        await this.checkCommand(208, [], 0, 6e5)
    }
}
const os = async(e,t,s,i)=>{
    let r, n, a;
    const o = t=>{
        ((e,t,s,i)=>{
            i = i || {};
            const r = new CustomEvent(t,{
                bubbles: void 0 === i.bubbles || i.bubbles,
                cancelable: Boolean(i.cancelable),
                composed: void 0 === i.composed || i.composed,
                detail: s
            });
            e.dispatchEvent(r)
        }
        )(e, "state-changed", {
            ...t,
            manifest: r,
            build: n,
            chipFamily: a
        })
    }
      , l = new URL(s,location.toString()).toString()
      , h = fetch(l).then((e=>e.json()));
    let d;
    try {
        d = await (async e=>{
            const t = await navigator.serial.requestPort();
            return e.log("Đang kết nối..."),
            await t.open({
                baudRate: 115200
            }),
            e.log("Kết nối thành công."),
            new ns(t,e)
        }
        )(t)
    } catch (e) {
        return
    }
    window.esploader = d,
    o({
        state: "Đang khởi tạo",
        message: "Đang khởi tạo...",
        details: {
            done: !1
        }
    });
    try {
        await d.initialize()
    } catch (e) {
        return t.error(e),
        void (d.connected && (o({
            state: "error - Lỗi",
            message: "Khởi tạo thất bại. Hãy thử kết nối lại, giữ nút BOOT khi chọn cổng COM.",
            details: {
                error: "failed_initialize",
                details: e
            }
        }),
        await d.disconnect()))
    }
    a = (e=>{
        switch (e.chipFamily) {
        case p:
            return "ESP32";
        case u:
            return "ESP8266";
        case f:
            return "ESP32-S2";
        default:
            return "Unknown Chip"
        }
    }
    )(d),
    o({
        state: "Đang khởi tạo",
        message: `Đã khởi tạo thành công cho thiết bị ${a}`,
        details: {
            done: !0
        }
    }),
    o({
        state: "Tìm nạp tệp tin",
        message: "Đang tìm nạp tệp tin...",
        details: {
            done: !1
        }
    });
    try {
        r = await h
    } catch (e) {
        return o({
            state: "error - Lỗi",
            message: `Không thể tìm nạp tệp: ${e.message}`,
            details: {
                error: "fetch_manifest_failed",
                details: e
            }
        }),
        void await d.disconnect()
    }
    if (n = r.builds.find((e=>e.chipFamily === a)),
    o({
        state: "manifest",
        message: `Đã tìm thấy firmware cho ${r.name}`,
        details: {
            done: !0
        }
    }),
    !n)
        return o({
            state: "error",
            message: `Your ${a} board is not supported.`,
            details: {
                error: "not_supported",
                details: a
            }
        }),
        void await d.disconnect();
    o({
        state: "Chuẩn bị",
        message: "Đang chuẩn bị cài đặt...",
        details: {
            done: !1
        }
    });
    const c = n.parts.map((async e=>{
        const t = new URL(e.path,l).toString()
          , s = await fetch(t);
        if (!s.ok)
            throw new Error(`Đang tải firmware ${e.path} Lỗi: ${s.status}`);
        return s.arrayBuffer()
    }
    ))
      , m = await d.runStub()
      , g = [];
    let _ = 0;
    for (const e of c)
        try {
            const t = await e;
            g.push(t),
            _ += t.byteLength
        } catch (e) {
            return o({
                state: "error",
                message: e,
                details: {
                    error: "failed_firmware_download",
                    details: e
                }
            }),
            void await d.disconnect()
        }
    o({
        state: "Đang chuẩn bị",
        message: "Đã sẵn sàng cài đặt",
        details: {
            done: !0
        }
    }),
    i && (o({
        state: "Đang xóa",
        message: "Đang xóa thiết bị...",
        details: {
            done: !1
        }
    }),
    await m.eraseFlash(),
    o({
        state: "Đang xóa",
        message: "Đã xóa thành công",
        details: {
            done: !0
        }
    }));
    let w = 0;
    o({
        state: "Đang nạp",
        message: `Tiến trình nạp: ${w}%`,
        details: {
            bytesTotal: _,
            bytesWritten: 0,
            percentage: w
        }
    });
    let y = 0;
    for (const e of n.parts) {
        const t = g.shift();
        try {
            await m.flashData(t, (e=>{
                const t = Math.floor((y + e) / _ * 100);
                t !== w && (w = t,
                o({
                    state: "Đang nạp",
                    message: `Tiến trình nạp: ${t}%`,
                    details: {
                        bytesTotal: _,
                        bytesWritten: y + e,
                        percentage: t
                    }
                }))
            }
            ), e.offset, !0)
        } catch (e) {
            return o({
                state: "error",
                message: e,
                details: {
                    error: "write_failed",
                    details: e
                }
            }),
            void await d.disconnect()
        }
        y += t.byteLength
    }
    var b;
    o({
        state: "Đang nạp",
        message: "Đã nạp thành công",
        details: {
            bytesTotal: _,
            bytesWritten: y,
            percentage: 100
        }
    }),
    await (b = 100,
    new Promise((e=>setTimeout(e, b)))),
    await d.hardReset(),
    await d.disconnect(),
    o({
        state: "Hoàn thành",
        message: "Tuyệt vời. Đã nạp thành công!"
    })
}
  , ls = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets"in Document.prototype && "replace"in CSSStyleSheet.prototype
  , hs = Symbol();
class ds {
    constructor(e, t) {
        if (t !== hs)
            throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = e
    }
    get styleSheet() {
        return ls && void 0 === this.t && (this.t = new CSSStyleSheet,
        this.t.replaceSync(this.cssText)),
        this.t
    }
    toString() {
        return this.cssText
    }
}
const cs = new Map
  , us = e=>{
    let t = cs.get(e);
    return void 0 === t && cs.set(e, t = new ds(e,hs)),
    t
}
  , ps = (e,...t)=>{
    const s = 1 === e.length ? e[0] : t.reduce(((t,s,i)=>t + (e=>{
        if (e instanceof ds)
            return e.cssText;
        if ("number" == typeof e)
            return e;
        throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")
    }
    )(s) + e[i + 1]), e[0]);
    return us(s)
}
  , fs = ls ? e=>e : e=>e instanceof CSSStyleSheet ? (e=>{
    let t = "";
    for (const s of e.cssRules)
        t += s.cssText;
    return (e=>us("string" == typeof e ? e : e + ""))(t)
}
)(e) : e;
var ms, gs, _s, ws;
const ys = {
    toAttribute(e, t) {
        switch (t) {
        case Boolean:
            e = e ? "" : null;
            break;
        case Object:
        case Array:
            e = null == e ? e : JSON.stringify(e)
        }
        return e
    },
    fromAttribute(e, t) {
        let s = e;
        switch (t) {
        case Boolean:
            s = null !== e;
            break;
        case Number:
            s = null === e ? null : Number(e);
            break;
        case Object:
        case Array:
            try {
                s = JSON.parse(e)
            } catch (e) {
                s = null
            }
        }
        return s
    }
}
  , bs = (e,t)=>t !== e && (t == t || e == e)
  , vs = {
    attribute: !0,
    type: String,
    converter: ys,
    reflect: !1,
    hasChanged: bs
};
class Ss extends HTMLElement {
    constructor() {
        super(),
        this.Πi = new Map,
        this.Πo = void 0,
        this.Πl = void 0,
        this.isUpdatePending = !1,
        this.hasUpdated = !1,
        this.Πh = null,
        this.u()
    }
    static addInitializer(e) {
        var t;
        null !== (t = this.v) && void 0 !== t || (this.v = []),
        this.v.push(e)
    }
    static get observedAttributes() {
        this.finalize();
        const e = [];
        return this.elementProperties.forEach(((t,s)=>{
            const i = this.Πp(s, t);
            void 0 !== i && (this.Πm.set(i, s),
            e.push(i))
        }
        )),
        e
    }
    static createProperty(e, t=vs) {
        if (t.state && (t.attribute = !1),
        this.finalize(),
        this.elementProperties.set(e, t),
        !t.noAccessor && !this.prototype.hasOwnProperty(e)) {
            const s = "symbol" == typeof e ? Symbol() : "__" + e
              , i = this.getPropertyDescriptor(e, s, t);
            void 0 !== i && Object.defineProperty(this.prototype, e, i)
        }
    }
    static getPropertyDescriptor(e, t, s) {
        return {
            get() {
                return this[t]
            },
            set(i) {
                const r = this[e];
                this[t] = i,
                this.requestUpdate(e, r, s)
            },
            configurable: !0,
            enumerable: !0
        }
    }
    static getPropertyOptions(e) {
        return this.elementProperties.get(e) || vs
    }
    static finalize() {
        if (this.hasOwnProperty("finalized"))
            return !1;
        this.finalized = !0;
        const e = Object.getPrototypeOf(this);
        if (e.finalize(),
        this.elementProperties = new Map(e.elementProperties),
        this.Πm = new Map,
        this.hasOwnProperty("properties")) {
            const e = this.properties
              , t = [...Object.getOwnPropertyNames(e), ...Object.getOwnPropertySymbols(e)];
            for (const s of t)
                this.createProperty(s, e[s])
        }
        return this.elementStyles = this.finalizeStyles(this.styles),
        !0
    }
    static finalizeStyles(e) {
        const t = [];
        if (Array.isArray(e)) {
            const s = new Set(e.flat(1 / 0).reverse());
            for (const e of s)
                t.unshift(fs(e))
        } else
            void 0 !== e && t.push(fs(e));
        return t
    }
    static Πp(e, t) {
        const s = t.attribute;
        return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof e ? e.toLowerCase() : void 0
    }
    u() {
        var e;
        this.Πg = new Promise((e=>this.enableUpdating = e)),
        this.L = new Map,
        this.Π_(),
        this.requestUpdate(),
        null === (e = this.constructor.v) || void 0 === e || e.forEach((e=>e(this)))
    }
    addController(e) {
        var t, s;
        (null !== (t = this.ΠU) && void 0 !== t ? t : this.ΠU = []).push(e),
        void 0 !== this.renderRoot && this.isConnected && (null === (s = e.hostConnected) || void 0 === s || s.call(e))
    }
    removeController(e) {
        var t;
        null === (t = this.ΠU) || void 0 === t || t.splice(this.ΠU.indexOf(e) >>> 0, 1)
    }
    Π_() {
        this.constructor.elementProperties.forEach(((e,t)=>{
            this.hasOwnProperty(t) && (this.Πi.set(t, this[t]),
            delete this[t])
        }
        ))
    }
    createRenderRoot() {
        var e;
        const t = null !== (e = this.shadowRoot) && void 0 !== e ? e : this.attachShadow(this.constructor.shadowRootOptions);
        return ((e,t)=>{
            ls ? e.adoptedStyleSheets = t.map((e=>e instanceof CSSStyleSheet ? e : e.styleSheet)) : t.forEach((t=>{
                const s = document.createElement("style");
                s.textContent = t.cssText,
                e.appendChild(s)
            }
            ))
        }
        )(t, this.constructor.elementStyles),
        t
    }
    connectedCallback() {
        var e;
        void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()),
        this.enableUpdating(!0),
        null === (e = this.ΠU) || void 0 === e || e.forEach((e=>{
            var t;
            return null === (t = e.hostConnected) || void 0 === t ? void 0 : t.call(e)
        }
        )),
        this.Πl && (this.Πl(),
        this.Πo = this.Πl = void 0)
    }
    enableUpdating(e) {}
    disconnectedCallback() {
        var e;
        null === (e = this.ΠU) || void 0 === e || e.forEach((e=>{
            var t;
            return null === (t = e.hostDisconnected) || void 0 === t ? void 0 : t.call(e)
        }
        )),
        this.Πo = new Promise((e=>this.Πl = e))
    }
    attributeChangedCallback(e, t, s) {
        this.K(e, s)
    }
    Πj(e, t, s=vs) {
        var i, r;
        const n = this.constructor.Πp(e, s);
        if (void 0 !== n && !0 === s.reflect) {
            const a = (null !== (r = null === (i = s.converter) || void 0 === i ? void 0 : i.toAttribute) && void 0 !== r ? r : ys.toAttribute)(t, s.type);
            this.Πh = e,
            null == a ? this.removeAttribute(n) : this.setAttribute(n, a),
            this.Πh = null
        }
    }
    K(e, t) {
        var s, i, r;
        const n = this.constructor
          , a = n.Πm.get(e);
        if (void 0 !== a && this.Πh !== a) {
            const e = n.getPropertyOptions(a)
              , o = e.converter
              , l = null !== (r = null !== (i = null === (s = o) || void 0 === s ? void 0 : s.fromAttribute) && void 0 !== i ? i : "function" == typeof o ? o : null) && void 0 !== r ? r : ys.fromAttribute;
            this.Πh = a,
            this[a] = l(t, e.type),
            this.Πh = null
        }
    }
    requestUpdate(e, t, s) {
        let i = !0;
        void 0 !== e && (((s = s || this.constructor.getPropertyOptions(e)).hasChanged || bs)(this[e], t) ? (this.L.has(e) || this.L.set(e, t),
        !0 === s.reflect && this.Πh !== e && (void 0 === this.Πk && (this.Πk = new Map),
        this.Πk.set(e, s))) : i = !1),
        !this.isUpdatePending && i && (this.Πg = this.Πq())
    }
    async Πq() {
        this.isUpdatePending = !0;
        try {
            for (await this.Πg; this.Πo; )
                await this.Πo
        } catch (e) {
            Promise.reject(e)
        }
        const e = this.performUpdate();
        return null != e && await e,
        !this.isUpdatePending
    }
    performUpdate() {
        var e;
        if (!this.isUpdatePending)
            return;
        this.hasUpdated,
        this.Πi && (this.Πi.forEach(((e,t)=>this[t] = e)),
        this.Πi = void 0);
        let t = !1;
        const s = this.L;
        try {
            t = this.shouldUpdate(s),
            t ? (this.willUpdate(s),
            null === (e = this.ΠU) || void 0 === e || e.forEach((e=>{
                var t;
                return null === (t = e.hostUpdate) || void 0 === t ? void 0 : t.call(e)
            }
            )),
            this.update(s)) : this.Π$()
        } catch (e) {
            throw t = !1,
            this.Π$(),
            e
        }
        t && this.E(s)
    }
    willUpdate(e) {}
    E(e) {
        var t;
        null === (t = this.ΠU) || void 0 === t || t.forEach((e=>{
            var t;
            return null === (t = e.hostUpdated) || void 0 === t ? void 0 : t.call(e)
        }
        )),
        this.hasUpdated || (this.hasUpdated = !0,
        this.firstUpdated(e)),
        this.updated(e)
    }
    Π$() {
        this.L = new Map,
        this.isUpdatePending = !1
    }
    get updateComplete() {
        return this.getUpdateComplete()
    }
    getUpdateComplete() {
        return this.Πg
    }
    shouldUpdate(e) {
        return !0
    }
    update(e) {
        void 0 !== this.Πk && (this.Πk.forEach(((e,t)=>this.Πj(t, this[t], e))),
        this.Πk = void 0),
        this.Π$()
    }
    updated(e) {}
    firstUpdated(e) {}
}
var ks, xs, Es, As;
Ss.finalized = !0,
Ss.elementProperties = new Map,
Ss.elementStyles = [],
Ss.shadowRootOptions = {
    mode: "open"
},
null === (gs = (ms = globalThis).reactiveElementPlatformSupport) || void 0 === gs || gs.call(ms, {
    ReactiveElement: Ss
}),
(null !== (_s = (ws = globalThis).reactiveElementVersions) && void 0 !== _s ? _s : ws.reactiveElementVersions = []).push("1.0.0-rc.2");
const zs = globalThis.trustedTypes
  , Cs = zs ? zs.createPolicy("lit-html", {
    createHTML: e=>e
}) : void 0
  , Rs = `lit$${(Math.random() + "").slice(9)}$`
  , Us = "?" + Rs
  , Ps = `<${Us}>`
  , Os = document
  , Ts = (e="")=>Os.createComment(e)
  , Is = e=>null === e || "object" != typeof e && "function" != typeof e
  , Ns = Array.isArray
  , Bs = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g
  , Fs = /-->/g
  , $s = />/g
  , Ds = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g
  , Ms = /'/g
  , Ls = /"/g
  , Hs = /^(?:script|style|textarea)$/i
  , Zs = (e=>(t,...s)=>({
    _$litType$: e,
    strings: t,
    values: s
}))(1)
  , js = Symbol.for("lit-noChange")
  , Vs = Symbol.for("lit-nothing")
  , Ws = new WeakMap
  , Xs = Os.createTreeWalker(Os, 129, null, !1);
class qs {
    constructor({strings: e, _$litType$: t}, s) {
        let i;
        this.parts = [];
        let r = 0
          , n = 0;
        const a = e.length - 1
          , o = this.parts
          , [l,h] = ((e,t)=>{
            const s = e.length - 1
              , i = [];
            let r, n = 2 === t ? "<svg>" : "", a = Bs;
            for (let t = 0; t < s; t++) {
                const s = e[t];
                let o, l, h = -1, d = 0;
                for (; d < s.length && (a.lastIndex = d,
                l = a.exec(s),
                null !== l); )
                    d = a.lastIndex,
                    a === Bs ? "!--" === l[1] ? a = Fs : void 0 !== l[1] ? a = $s : void 0 !== l[2] ? (Hs.test(l[2]) && (r = RegExp("</" + l[2], "g")),
                    a = Ds) : void 0 !== l[3] && (a = Ds) : a === Ds ? ">" === l[0] ? (a = null != r ? r : Bs,
                    h = -1) : void 0 === l[1] ? h = -2 : (h = a.lastIndex - l[2].length,
                    o = l[1],
                    a = void 0 === l[3] ? Ds : '"' === l[3] ? Ls : Ms) : a === Ls || a === Ms ? a = Ds : a === Fs || a === $s ? a = Bs : (a = Ds,
                    r = void 0);
                const c = a === Ds && e[t + 1].startsWith("/>") ? " " : "";
                n += a === Bs ? s + Ps : h >= 0 ? (i.push(o),
                s.slice(0, h) + "$lit$" + s.slice(h) + Rs + c) : s + Rs + (-2 === h ? (i.push(void 0),
                t) : c)
            }
            const o = n + (e[s] || "<?>") + (2 === t ? "</svg>" : "");
            return [void 0 !== Cs ? Cs.createHTML(o) : o, i]
        }
        )(e, t);
        if (this.el = qs.createElement(l, s),
        Xs.currentNode = this.el.content,
        2 === t) {
            const e = this.el.content
              , t = e.firstChild;
            t.remove(),
            e.append(...t.childNodes)
        }
        for (; null !== (i = Xs.nextNode()) && o.length < a; ) {
            if (1 === i.nodeType) {
                if (i.hasAttributes()) {
                    const e = [];
                    for (const t of i.getAttributeNames())
                        if (t.endsWith("$lit$") || t.startsWith(Rs)) {
                            const s = h[n++];
                            if (e.push(t),
                            void 0 !== s) {
                                const e = i.getAttribute(s.toLowerCase() + "$lit$").split(Rs)
                                  , t = /([.?@])?(.*)/.exec(s);
                                o.push({
                                    type: 1,
                                    index: r,
                                    name: t[2],
                                    strings: e,
                                    ctor: "." === t[1] ? Qs : "?" === t[1] ? ei : "@" === t[1] ? ti : Gs
                                })
                            } else
                                o.push({
                                    type: 6,
                                    index: r
                                })
                        }
                    for (const t of e)
                        i.removeAttribute(t)
                }
                if (Hs.test(i.tagName)) {
                    const e = i.textContent.split(Rs)
                      , t = e.length - 1;
                    if (t > 0) {
                        i.textContent = zs ? zs.emptyScript : "";
                        for (let s = 0; s < t; s++)
                            i.append(e[s], Ts()),
                            Xs.nextNode(),
                            o.push({
                                type: 2,
                                index: ++r
                            });
                        i.append(e[t], Ts())
                    }
                }
            } else if (8 === i.nodeType)
                if (i.data === Us)
                    o.push({
                        type: 2,
                        index: r
                    });
                else {
                    let e = -1;
                    for (; -1 !== (e = i.data.indexOf(Rs, e + 1)); )
                        o.push({
                            type: 7,
                            index: r
                        }),
                        e += Rs.length - 1
                }
            r++
        }
    }
    static createElement(e, t) {
        const s = Os.createElement("template");
        return s.innerHTML = e,
        s
    }
}
function Ks(e, t, s=e, i) {
    var r, n, a, o;
    if (t === js)
        return t;
    let l = void 0 !== i ? null === (r = s.Σi) || void 0 === r ? void 0 : r[i] : s.Σo;
    const h = Is(t) ? void 0 : t._$litDirective$;
    return (null == l ? void 0 : l.constructor) !== h && (null === (n = null == l ? void 0 : l.O) || void 0 === n || n.call(l, !1),
    void 0 === h ? l = void 0 : (l = new h(e),
    l.T(e, s, i)),
    void 0 !== i ? (null !== (a = (o = s).Σi) && void 0 !== a ? a : o.Σi = [])[i] = l : s.Σo = l),
    void 0 !== l && (t = Ks(e, l.S(e, t.values), l, i)),
    t
}
class Ys {
    constructor(e, t) {
        this.l = [],
        this.N = void 0,
        this.D = e,
        this.M = t
    }
    u(e) {
        var t;
        const {el: {content: s}, parts: i} = this.D
          , r = (null !== (t = null == e ? void 0 : e.creationScope) && void 0 !== t ? t : Os).importNode(s, !0);
        Xs.currentNode = r;
        let n = Xs.nextNode()
          , a = 0
          , o = 0
          , l = i[0];
        for (; void 0 !== l; ) {
            if (a === l.index) {
                let t;
                2 === l.type ? t = new Js(n,n.nextSibling,this,e) : 1 === l.type ? t = new l.ctor(n,l.name,l.strings,this,e) : 6 === l.type && (t = new si(n,this,e)),
                this.l.push(t),
                l = i[++o]
            }
            a !== (null == l ? void 0 : l.index) && (n = Xs.nextNode(),
            a++)
        }
        return r
    }
    v(e) {
        let t = 0;
        for (const s of this.l)
            void 0 !== s && (void 0 !== s.strings ? (s.I(e, s, t),
            t += s.strings.length - 2) : s.I(e[t])),
            t++
    }
}
class Js {
    constructor(e, t, s, i) {
        this.type = 2,
        this.N = void 0,
        this.A = e,
        this.B = t,
        this.M = s,
        this.options = i
    }
    setConnected(e) {
        var t;
        null === (t = this.P) || void 0 === t || t.call(this, e)
    }
    get parentNode() {
        return this.A.parentNode
    }
    get startNode() {
        return this.A
    }
    get endNode() {
        return this.B
    }
    I(e, t=this) {
        e = Ks(this, e, t),
        Is(e) ? e === Vs || null == e || "" === e ? (this.H !== Vs && this.R(),
        this.H = Vs) : e !== this.H && e !== js && this.m(e) : void 0 !== e._$litType$ ? this._(e) : void 0 !== e.nodeType ? this.$(e) : (e=>{
            var t;
            return Ns(e) || "function" == typeof (null === (t = e) || void 0 === t ? void 0 : t[Symbol.iterator])
        }
        )(e) ? this.g(e) : this.m(e)
    }
    k(e, t=this.B) {
        return this.A.parentNode.insertBefore(e, t)
    }
    $(e) {
        this.H !== e && (this.R(),
        this.H = this.k(e))
    }
    m(e) {
        const t = this.A.nextSibling;
        null !== t && 3 === t.nodeType && (null === this.B ? null === t.nextSibling : t === this.B.previousSibling) ? t.data = e : this.$(Os.createTextNode(e)),
        this.H = e
    }
    _(e) {
        var t;
        const {values: s, _$litType$: i} = e
          , r = "number" == typeof i ? this.C(e) : (void 0 === i.el && (i.el = qs.createElement(i.h, this.options)),
        i);
        if ((null === (t = this.H) || void 0 === t ? void 0 : t.D) === r)
            this.H.v(s);
        else {
            const e = new Ys(r,this)
              , t = e.u(this.options);
            e.v(s),
            this.$(t),
            this.H = e
        }
    }
    C(e) {
        let t = Ws.get(e.strings);
        return void 0 === t && Ws.set(e.strings, t = new qs(e)),
        t
    }
    g(e) {
        Ns(this.H) || (this.H = [],
        this.R());
        const t = this.H;
        let s, i = 0;
        for (const r of e)
            i === t.length ? t.push(s = new Js(this.k(Ts()),this.k(Ts()),this,this.options)) : s = t[i],
            s.I(r),
            i++;
        i < t.length && (this.R(s && s.B.nextSibling, i),
        t.length = i)
    }
    R(e=this.A.nextSibling, t) {
        var s;
        for (null === (s = this.P) || void 0 === s || s.call(this, !1, !0, t); e && e !== this.B; ) {
            const t = e.nextSibling;
            e.remove(),
            e = t
        }
    }
}
class Gs {
    constructor(e, t, s, i, r) {
        this.type = 1,
        this.H = Vs,
        this.N = void 0,
        this.V = void 0,
        this.element = e,
        this.name = t,
        this.M = i,
        this.options = r,
        s.length > 2 || "" !== s[0] || "" !== s[1] ? (this.H = Array(s.length - 1).fill(Vs),
        this.strings = s) : this.H = Vs
    }
    get tagName() {
        return this.element.tagName
    }
    I(e, t=this, s, i) {
        const r = this.strings;
        let n = !1;
        if (void 0 === r)
            e = Ks(this, e, t, 0),
            n = !Is(e) || e !== this.H && e !== js,
            n && (this.H = e);
        else {
            const i = e;
            let a, o;
            for (e = r[0],
            a = 0; a < r.length - 1; a++)
                o = Ks(this, i[s + a], t, a),
                o === js && (o = this.H[a]),
                n || (n = !Is(o) || o !== this.H[a]),
                o === Vs ? e = Vs : e !== Vs && (e += (null != o ? o : "") + r[a + 1]),
                this.H[a] = o
        }
        n && !i && this.W(e)
    }
    W(e) {
        e === Vs ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != e ? e : "")
    }
}
class Qs extends Gs {
    constructor() {
        super(...arguments),
        this.type = 3
    }
    W(e) {
        this.element[this.name] = e === Vs ? void 0 : e
    }
}
class ei extends Gs {
    constructor() {
        super(...arguments),
        this.type = 4
    }
    W(e) {
        e && e !== Vs ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name)
    }
}
class ti extends Gs {
    constructor() {
        super(...arguments),
        this.type = 5
    }
    I(e, t=this) {
        var s;
        if ((e = null !== (s = Ks(this, e, t, 0)) && void 0 !== s ? s : Vs) === js)
            return;
        const i = this.H
          , r = e === Vs && i !== Vs || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive
          , n = e !== Vs && (i === Vs || r);
        r && this.element.removeEventListener(this.name, this, i),
        n && this.element.addEventListener(this.name, this, e),
        this.H = e
    }
    handleEvent(e) {
        var t, s;
        "function" == typeof this.H ? this.H.call(null !== (s = null === (t = this.options) || void 0 === t ? void 0 : t.host) && void 0 !== s ? s : this.element, e) : this.H.handleEvent(e)
    }
}
class si {
    constructor(e, t, s) {
        this.element = e,
        this.type = 6,
        this.N = void 0,
        this.V = void 0,
        this.M = t,
        this.options = s
    }
    I(e) {
        Ks(this, e)
    }
}
var ii, ri, ni, ai, oi, li;
null === (xs = (ks = globalThis).litHtmlPlatformSupport) || void 0 === xs || xs.call(ks, qs, Js),
(null !== (Es = (As = globalThis).litHtmlVersions) && void 0 !== Es ? Es : As.litHtmlVersions = []).push("2.0.0-rc.3"),
(null !== (ii = (li = globalThis).litElementVersions) && void 0 !== ii ? ii : li.litElementVersions = []).push("3.0.0-rc.2");
class hi extends Ss {
    constructor() {
        super(...arguments),
        this.renderOptions = {
            host: this
        },
        this.Φt = void 0
    }
    createRenderRoot() {
        var e, t;
        const s = super.createRenderRoot();
        return null !== (e = (t = this.renderOptions).renderBefore) && void 0 !== e || (t.renderBefore = s.firstChild),
        s
    }
    update(e) {
        const t = this.render();
        super.update(e),
        this.Φt = ((e,t,s)=>{
            var i, r;
            const n = null !== (i = null == s ? void 0 : s.renderBefore) && void 0 !== i ? i : t;
            let a = n._$litPart$;
            if (void 0 === a) {
                const e = null !== (r = null == s ? void 0 : s.renderBefore) && void 0 !== r ? r : null;
                n._$litPart$ = a = new Js(t.insertBefore(Ts(), e),e,void 0,s)
            }
            return a.I(e),
            a
        }
        )(t, this.renderRoot, this.renderOptions)
    }
    connectedCallback() {
        var e;
        super.connectedCallback(),
        null === (e = this.Φt) || void 0 === e || e.setConnected(!0)
    }
    disconnectedCallback() {
        var e;
        super.disconnectedCallback(),
        null === (e = this.Φt) || void 0 === e || e.setConnected(!1)
    }
    render() {
        return js
    }
}
hi.finalized = !0,
hi._$litElement$ = !0,
null === (ni = (ri = globalThis).litElementHydrateSupport) || void 0 === ni || ni.call(ri, {
    LitElement: hi
}),
null === (oi = (ai = globalThis).litElementPlatformSupport) || void 0 === oi || oi.call(ai, {
    LitElement: hi
});
const di = e=>t=>"function" == typeof t ? ((e,t)=>(window.customElements.define(e, t),
t))(e, t) : ((e,t)=>{
    const {kind: s, elements: i} = t;
    return {
        kind: s,
        elements: i,
        finisher(t) {
            window.customElements.define(e, t)
        }
    }
}
)(e, t)
  , ci = (e,t)=>"method" === t.kind && t.descriptor && !("value"in t.descriptor) ? {
    ...t,
    finisher(s) {
        s.createProperty(t.key, e)
    }
} : {
    kind: "field",
    key: Symbol(),
    placement: "own",
    descriptor: {},
    originalKey: t.key,
    initializer() {
        "function" == typeof t.initializer && (this[t.key] = t.initializer.call(this))
    },
    finisher(s) {
        s.createProperty(t.key, e)
    }
};
function ui(e) {
    return function(e) {
        return (t,s)=>void 0 !== s ? ((e,t,s)=>{
            t.constructor.createProperty(s, e)
        }
        )(e, t, s) : ci(e, t)
    }({
        ...e,
        state: !0,
        attribute: !1
    })
}
const pi = 1;
const fi = (e=>(...t)=>({
    _$litDirective$: e,
    values: t
}))(class extends class {
    constructor(e) {}
    T(e, t, s) {
        this.Σdt = e,
        this.M = t,
        this.Σct = s
    }
    S(e, t) {
        return this.update(e, t)
    }
    update(e, t) {
        return this.render(...t)
    }
}
{
    constructor(e) {
        var t;
        if (super(e),
        e.type !== pi || "class" !== e.name || (null === (t = e.strings) || void 0 === t ? void 0 : t.length) > 2)
            throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")
    }
    render(e) {
        return Object.keys(e).filter((t=>e[t])).join(" ")
    }
    update(e, [t]) {
        if (void 0 === this.bt) {
            this.bt = new Set;
            for (const e in t)
                t[e] && this.bt.add(e);
            return this.render(t)
        }
        const s = e.element.classList;
        this.bt.forEach((e=>{
            e in t || (s.remove(e),
            this.bt.delete(e))
        }
        ));
        for (const e in t) {
            const i = !!t[e];
            i !== this.bt.has(e) && (i ? (s.add(e),
            this.bt.add(e)) : (s.remove(e),
            this.bt.delete(e)))
        }
        return js
    }
}
);
var mi = function(e, t, s, i) {
    var r, n = arguments.length, a = n < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, s) : i;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
        a = Reflect.decorate(e, t, s, i);
    else
        for (var o = e.length - 1; o >= 0; o--)
            (r = e[o]) && (a = (n < 3 ? r(a) : n > 3 ? r(t, s, a) : r(t, s)) || a);
    return n > 3 && a && Object.defineProperty(t, s, a),
    a
};
let gi = class extends hi {
    constructor() {
        super(...arguments),
        this._rows = []
    }
    render() {
        return Zs`${this._rows.map((e=>Zs`<div
          class=${fi({
            error: !0 === e.error,
            action: !0 === e.action
        })}
        >
          ${e.message}
        </div>`))}`
    }
    willUpdate() {
        this.toggleAttribute("hidden", !this._rows.length)
    }
    clear() {
        this._rows = []
    }
    processState(e) {
        "error" !== e.state ? (this.addRow(e),
        "finished" === e.state && this.addAction(Zs`<button @click=${this.clear}>Close this log</button>`)) : this.addError(e.message)
    }
    addRow(e) {
        if (e.state && this._rows.length > 0 && this._rows[this._rows.length - 1].state === e.state) {
            const t = this._rows.slice(0, -1);
            t.push(e),
            this._rows = t
        } else
            this._rows = [...this._rows, e]
    }
    addError(e) {
        this.addRow({
            message: e,
            error: !0
        })
    }
    addAction(e) {
        this.addRow({
            message: e,
            action: !0
        })
    }
    removeRow(e) {
        this._rows.length > 0 && this._rows[this._rows.length - 1].state === e && (this._rows = this._rows.slice(0, -1))
    }
}
;
function _i(e, t, s, i) {
    var r, n = arguments.length, a = n < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, s) : i;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
        a = Reflect.decorate(e, t, s, i);
    else
        for (var o = e.length - 1; o >= 0; o--)
            (r = e[o]) && (a = (n < 3 ? r(a) : n > 3 ? r(t, s, a) : r(t, s)) || a);
    return n > 3 && a && Object.defineProperty(t, s, a),
    a
}
gi.styles = ps`
    :host {
      display: block;
      margin-top: 16px;
      padding: 12px 16px;
      font-family: monospace;
      background: var(--esp-tools-log-background, black);
      color: var(--esp-tools-log-text-color, greenyellow);
      font-size: 14px;
      line-height: 19px;
    }

    :host([hidden]) {
      display: none;
    }

    button {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      text-align: left;
      text-decoration: underline;
      cursor: pointer;
    }

    .error {
      color: var(--esp-tools-error-color, #dc3545);
    }

    .error,
    .action {
      margin-top: 1em;
    }
  `,
mi([ui()], gi.prototype, "_rows", void 0),
gi = mi([di("esp-web-flash-log")], gi);
const wi = "undefined" != typeof window && null != window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback
  , yi = (e,t,s=null)=>{
    for (; t !== s; ) {
        const s = t.nextSibling;
        e.removeChild(t),
        t = s
    }
}
  , bi = `{{lit-${String(Math.random()).slice(2)}}}`
  , vi = `\x3c!--${bi}--\x3e`
  , Si = new RegExp(`${bi}|${vi}`);
class ki {
    constructor(e, t) {
        this.parts = [],
        this.element = t;
        const s = []
          , i = []
          , r = document.createTreeWalker(t.content, 133, null, !1);
        let n = 0
          , a = -1
          , o = 0;
        const {strings: l, values: {length: h}} = e;
        for (; o < h; ) {
            const e = r.nextNode();
            if (null !== e) {
                if (a++,
                1 === e.nodeType) {
                    if (e.hasAttributes()) {
                        const t = e.attributes
                          , {length: s} = t;
                        let i = 0;
                        for (let e = 0; e < s; e++)
                            xi(t[e].name, "$lit$") && i++;
                        for (; i-- > 0; ) {
                            const t = l[o]
                              , s = zi.exec(t)[2]
                              , i = s.toLowerCase() + "$lit$"
                              , r = e.getAttribute(i);
                            e.removeAttribute(i);
                            const n = r.split(Si);
                            this.parts.push({
                                type: "attribute",
                                index: a,
                                name: s,
                                strings: n
                            }),
                            o += n.length - 1
                        }
                    }
                    "TEMPLATE" === e.tagName && (i.push(e),
                    r.currentNode = e.content)
                } else if (3 === e.nodeType) {
                    const t = e.data;
                    if (t.indexOf(bi) >= 0) {
                        const i = e.parentNode
                          , r = t.split(Si)
                          , n = r.length - 1;
                        for (let t = 0; t < n; t++) {
                            let s, n = r[t];
                            if ("" === n)
                                s = Ai();
                            else {
                                const e = zi.exec(n);
                                null !== e && xi(e[2], "$lit$") && (n = n.slice(0, e.index) + e[1] + e[2].slice(0, -"$lit$".length) + e[3]),
                                s = document.createTextNode(n)
                            }
                            i.insertBefore(s, e),
                            this.parts.push({
                                type: "node",
                                index: ++a
                            })
                        }
                        "" === r[n] ? (i.insertBefore(Ai(), e),
                        s.push(e)) : e.data = r[n],
                        o += n
                    }
                } else if (8 === e.nodeType)
                    if (e.data === bi) {
                        const t = e.parentNode;
                        null !== e.previousSibling && a !== n || (a++,
                        t.insertBefore(Ai(), e)),
                        n = a,
                        this.parts.push({
                            type: "node",
                            index: a
                        }),
                        null === e.nextSibling ? e.data = "" : (s.push(e),
                        a--),
                        o++
                    } else {
                        let t = -1;
                        for (; -1 !== (t = e.data.indexOf(bi, t + 1)); )
                            this.parts.push({
                                type: "node",
                                index: -1
                            }),
                            o++
                    }
            } else
                r.currentNode = i.pop()
        }
        for (const e of s)
            e.parentNode.removeChild(e)
    }
}
const xi = (e,t)=>{
    const s = e.length - t.length;
    return s >= 0 && e.slice(s) === t
}
  , Ei = e=>-1 !== e.index
  , Ai = ()=>document.createComment("")
  , zi = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
function Ci(e, t) {
    const {element: {content: s}, parts: i} = e
      , r = document.createTreeWalker(s, 133, null, !1);
    let n = Ui(i)
      , a = i[n]
      , o = -1
      , l = 0;
    const h = [];
    let d = null;
    for (; r.nextNode(); ) {
        o++;
        const e = r.currentNode;
        for (e.previousSibling === d && (d = null),
        t.has(e) && (h.push(e),
        null === d && (d = e)),
        null !== d && l++; void 0 !== a && a.index === o; )
            a.index = null !== d ? -1 : a.index - l,
            n = Ui(i, n),
            a = i[n]
    }
    h.forEach((e=>e.parentNode.removeChild(e)))
}
const Ri = e=>{
    let t = 11 === e.nodeType ? 0 : 1;
    const s = document.createTreeWalker(e, 133, null, !1);
    for (; s.nextNode(); )
        t++;
    return t
}
  , Ui = (e,t=-1)=>{
    for (let s = t + 1; s < e.length; s++) {
        const t = e[s];
        if (Ei(t))
            return s
    }
    return -1
}
;
const Pi = new WeakMap
  , Oi = e=>(...t)=>{
    const s = e(...t);
    return Pi.set(s, !0),
    s
}
  , Ti = e=>"function" == typeof e && Pi.has(e)
  , Ii = {}
  , Ni = {};
class Bi {
    constructor(e, t, s) {
        this.__parts = [],
        this.template = e,
        this.processor = t,
        this.options = s
    }
    update(e) {
        let t = 0;
        for (const s of this.__parts)
            void 0 !== s && s.setValue(e[t]),
            t++;
        for (const e of this.__parts)
            void 0 !== e && e.commit()
    }
    _clone() {
        const e = wi ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0)
          , t = []
          , s = this.template.parts
          , i = document.createTreeWalker(e, 133, null, !1);
        let r, n = 0, a = 0, o = i.nextNode();
        for (; n < s.length; )
            if (r = s[n],
            Ei(r)) {
                for (; a < r.index; )
                    a++,
                    "TEMPLATE" === o.nodeName && (t.push(o),
                    i.currentNode = o.content),
                    null === (o = i.nextNode()) && (i.currentNode = t.pop(),
                    o = i.nextNode());
                if ("node" === r.type) {
                    const e = this.processor.handleTextExpression(this.options);
                    e.insertAfterNode(o.previousSibling),
                    this.__parts.push(e)
                } else
                    this.__parts.push(...this.processor.handleAttributeExpressions(o, r.name, r.strings, this.options));
                n++
            } else
                this.__parts.push(void 0),
                n++;
        return wi && (document.adoptNode(e),
        customElements.upgrade(e)),
        e
    }
}
const Fi = window.trustedTypes && trustedTypes.createPolicy("lit-html", {
    createHTML: e=>e
})
  , $i = ` ${bi} `;
class Di {
    constructor(e, t, s, i) {
        this.strings = e,
        this.values = t,
        this.type = s,
        this.processor = i
    }
    getHTML() {
        const e = this.strings.length - 1;
        let t = ""
          , s = !1;
        for (let i = 0; i < e; i++) {
            const e = this.strings[i]
              , r = e.lastIndexOf("\x3c!--");
            s = (r > -1 || s) && -1 === e.indexOf("--\x3e", r + 1);
            const n = zi.exec(e);
            t += null === n ? e + (s ? $i : vi) : e.substr(0, n.index) + n[1] + n[2] + "$lit$" + n[3] + bi
        }
        return t += this.strings[e],
        t
    }
    getTemplateElement() {
        const e = document.createElement("template");
        let t = this.getHTML();
        return void 0 !== Fi && (t = Fi.createHTML(t)),
        e.innerHTML = t,
        e
    }
}
const Mi = e=>null === e || !("object" == typeof e || "function" == typeof e)
  , Li = e=>Array.isArray(e) || !(!e || !e[Symbol.iterator]);
class Hi {
    constructor(e, t, s) {
        this.dirty = !0,
        this.element = e,
        this.name = t,
        this.strings = s,
        this.parts = [];
        for (let e = 0; e < s.length - 1; e++)
            this.parts[e] = this._createPart()
    }
    _createPart() {
        return new Zi(this)
    }
    _getValue() {
        const e = this.strings
          , t = e.length - 1
          , s = this.parts;
        if (1 === t && "" === e[0] && "" === e[1]) {
            const e = s[0].value;
            if ("symbol" == typeof e)
                return String(e);
            if ("string" == typeof e || !Li(e))
                return e
        }
        let i = "";
        for (let r = 0; r < t; r++) {
            i += e[r];
            const t = s[r];
            if (void 0 !== t) {
                const e = t.value;
                if (Mi(e) || !Li(e))
                    i += "string" == typeof e ? e : String(e);
                else
                    for (const t of e)
                        i += "string" == typeof t ? t : String(t)
            }
        }
        return i += e[t],
        i
    }
    commit() {
        this.dirty && (this.dirty = !1,
        this.element.setAttribute(this.name, this._getValue()))
    }
}
class Zi {
    constructor(e) {
        this.value = void 0,
        this.committer = e
    }
    setValue(e) {
        e === Ii || Mi(e) && e === this.value || (this.value = e,
        Ti(e) || (this.committer.dirty = !0))
    }
    commit() {
        for (; Ti(this.value); ) {
            const e = this.value;
            this.value = Ii,
            e(this)
        }
        this.value !== Ii && this.committer.commit()
    }
}
class ji {
    constructor(e) {
        this.value = void 0,
        this.__pendingValue = void 0,
        this.options = e
    }
    appendInto(e) {
        this.startNode = e.appendChild(Ai()),
        this.endNode = e.appendChild(Ai())
    }
    insertAfterNode(e) {
        this.startNode = e,
        this.endNode = e.nextSibling
    }
    appendIntoPart(e) {
        e.__insert(this.startNode = Ai()),
        e.__insert(this.endNode = Ai())
    }
    insertAfterPart(e) {
        e.__insert(this.startNode = Ai()),
        this.endNode = e.endNode,
        e.endNode = this.startNode
    }
    setValue(e) {
        this.__pendingValue = e
    }
    commit() {
        if (null === this.startNode.parentNode)
            return;
        for (; Ti(this.__pendingValue); ) {
            const e = this.__pendingValue;
            this.__pendingValue = Ii,
            e(this)
        }
        const e = this.__pendingValue;
        e !== Ii && (Mi(e) ? e !== this.value && this.__commitText(e) : e instanceof Di ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : Li(e) ? this.__commitIterable(e) : e === Ni ? (this.value = Ni,
        this.clear()) : this.__commitText(e))
    }
    __insert(e) {
        this.endNode.parentNode.insertBefore(e, this.endNode)
    }
    __commitNode(e) {
        this.value !== e && (this.clear(),
        this.__insert(e),
        this.value = e)
    }
    __commitText(e) {
        const t = this.startNode.nextSibling
          , s = "string" == typeof (e = null == e ? "" : e) ? e : String(e);
        t === this.endNode.previousSibling && 3 === t.nodeType ? t.data = s : this.__commitNode(document.createTextNode(s)),
        this.value = e
    }
    __commitTemplateResult(e) {
        const t = this.options.templateFactory(e);
        if (this.value instanceof Bi && this.value.template === t)
            this.value.update(e.values);
        else {
            const s = new Bi(t,e.processor,this.options)
              , i = s._clone();
            s.update(e.values),
            this.__commitNode(i),
            this.value = s
        }
    }
    __commitIterable(e) {
        Array.isArray(this.value) || (this.value = [],
        this.clear());
        const t = this.value;
        let s, i = 0;
        for (const r of e)
            s = t[i],
            void 0 === s && (s = new ji(this.options),
            t.push(s),
            0 === i ? s.appendIntoPart(this) : s.insertAfterPart(t[i - 1])),
            s.setValue(r),
            s.commit(),
            i++;
        i < t.length && (t.length = i,
        this.clear(s && s.endNode))
    }
    clear(e=this.startNode) {
        yi(this.startNode.parentNode, e.nextSibling, this.endNode)
    }
}
class Vi {
    constructor(e, t, s) {
        if (this.value = void 0,
        this.__pendingValue = void 0,
        2 !== s.length || "" !== s[0] || "" !== s[1])
            throw new Error("Boolean attributes can only contain a single expression");
        this.element = e,
        this.name = t,
        this.strings = s
    }
    setValue(e) {
        this.__pendingValue = e
    }
    commit() {
        for (; Ti(this.__pendingValue); ) {
            const e = this.__pendingValue;
            this.__pendingValue = Ii,
            e(this)
        }
        if (this.__pendingValue === Ii)
            return;
        const e = !!this.__pendingValue;
        this.value !== e && (e ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name),
        this.value = e),
        this.__pendingValue = Ii
    }
}
class Wi extends Hi {
    constructor(e, t, s) {
        super(e, t, s),
        this.single = 2 === s.length && "" === s[0] && "" === s[1]
    }
    _createPart() {
        return new Xi(this)
    }
    _getValue() {
        return this.single ? this.parts[0].value : super._getValue()
    }
    commit() {
        this.dirty && (this.dirty = !1,
        this.element[this.name] = this._getValue())
    }
}
class Xi extends Zi {
}
let qi = !1;
(()=>{
    try {
        const e = {
            get capture() {
                return qi = !0,
                !1
            }
        };
        window.addEventListener("test", e, e),
        window.removeEventListener("test", e, e)
    } catch (e) {}
}
)();
class Ki {
    constructor(e, t, s) {
        this.value = void 0,
        this.__pendingValue = void 0,
        this.element = e,
        this.eventName = t,
        this.eventContext = s,
        this.__boundHandleEvent = e=>this.handleEvent(e)
    }
    setValue(e) {
        this.__pendingValue = e
    }
    commit() {
        for (; Ti(this.__pendingValue); ) {
            const e = this.__pendingValue;
            this.__pendingValue = Ii,
            e(this)
        }
        if (this.__pendingValue === Ii)
            return;
        const e = this.__pendingValue
          , t = this.value
          , s = null == e || null != t && (e.capture !== t.capture || e.once !== t.once || e.passive !== t.passive)
          , i = null != e && (null == t || s);
        s && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options),
        i && (this.__options = Yi(e),
        this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)),
        this.value = e,
        this.__pendingValue = Ii
    }
    handleEvent(e) {
        "function" == typeof this.value ? this.value.call(this.eventContext || this.element, e) : this.value.handleEvent(e)
    }
}
const Yi = e=>e && (qi ? {
    capture: e.capture,
    passive: e.passive,
    once: e.once
} : e.capture);
function Ji(e) {
    let t = Gi.get(e.type);
    void 0 === t && (t = {
        stringsArray: new WeakMap,
        keyString: new Map
    },
    Gi.set(e.type, t));
    let s = t.stringsArray.get(e.strings);
    if (void 0 !== s)
        return s;
    const i = e.strings.join(bi);
    return s = t.keyString.get(i),
    void 0 === s && (s = new ki(e,e.getTemplateElement()),
    t.keyString.set(i, s)),
    t.stringsArray.set(e.strings, s),
    s
}
const Gi = new Map
  , Qi = new WeakMap;
const er = new class {
    handleAttributeExpressions(e, t, s, i) {
        const r = t[0];
        if ("." === r) {
            return new Wi(e,t.slice(1),s).parts
        }
        if ("@" === r)
            return [new Ki(e,t.slice(1),i.eventContext)];
        if ("?" === r)
            return [new Vi(e,t.slice(1),s)];
        return new Hi(e,t,s).parts
    }
    handleTextExpression(e) {
        return new ji(e)
    }
}
;
"undefined" != typeof window && (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.4.1");
const tr = (e,...t)=>new Di(e,t,"html",er)
  , sr = (e,t)=>`${e}--${t}`;
let ir = !0;
void 0 === window.ShadyCSS ? ir = !1 : void 0 === window.ShadyCSS.prepareTemplateDom && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),
ir = !1);
const rr = e=>t=>{
    const s = sr(t.type, e);
    let i = Gi.get(s);
    void 0 === i && (i = {
        stringsArray: new WeakMap,
        keyString: new Map
    },
    Gi.set(s, i));
    let r = i.stringsArray.get(t.strings);
    if (void 0 !== r)
        return r;
    const n = t.strings.join(bi);
    if (r = i.keyString.get(n),
    void 0 === r) {
        const s = t.getTemplateElement();
        ir && window.ShadyCSS.prepareTemplateDom(s, e),
        r = new ki(t,s),
        i.keyString.set(n, r)
    }
    return i.stringsArray.set(t.strings, r),
    r
}
  , nr = ["html", "svg"]
  , ar = new Set
  , or = (e,t,s)=>{
    ar.add(e);
    const i = s ? s.element : document.createElement("template")
      , r = t.querySelectorAll("style")
      , {length: n} = r;
    if (0 === n)
        return void window.ShadyCSS.prepareTemplateStyles(i, e);
    const a = document.createElement("style");
    for (let e = 0; e < n; e++) {
        const t = r[e];
        t.parentNode.removeChild(t),
        a.textContent += t.textContent
    }
    (e=>{
        nr.forEach((t=>{
            const s = Gi.get(sr(t, e));
            void 0 !== s && s.keyString.forEach((e=>{
                const {element: {content: t}} = e
                  , s = new Set;
                Array.from(t.querySelectorAll("style")).forEach((e=>{
                    s.add(e)
                }
                )),
                Ci(e, s)
            }
            ))
        }
        ))
    }
    )(e);
    const o = i.content;
    s ? function(e, t, s=null) {
        const {element: {content: i}, parts: r} = e;
        if (null == s)
            return void i.appendChild(t);
        const n = document.createTreeWalker(i, 133, null, !1);
        let a = Ui(r)
          , o = 0
          , l = -1;
        for (; n.nextNode(); )
            for (l++,
            n.currentNode === s && (o = Ri(t),
            s.parentNode.insertBefore(t, s)); -1 !== a && r[a].index === l; ) {
                if (o > 0) {
                    for (; -1 !== a; )
                        r[a].index += o,
                        a = Ui(r, a);
                    return
                }
                a = Ui(r, a)
            }
    }(s, a, o.firstChild) : o.insertBefore(a, o.firstChild),
    window.ShadyCSS.prepareTemplateStyles(i, e);
    const l = o.querySelector("style");
    if (window.ShadyCSS.nativeShadow && null !== l)
        t.insertBefore(l.cloneNode(!0), t.firstChild);
    else if (s) {
        o.insertBefore(a, o.firstChild);
        const e = new Set;
        e.add(a),
        Ci(s, e)
    }
}
;
window.JSCompiler_renameProperty = (e,t)=>e;
const lr = {
    toAttribute(e, t) {
        switch (t) {
        case Boolean:
            return e ? "" : null;
        case Object:
        case Array:
            return null == e ? e : JSON.stringify(e)
        }
        return e
    },
    fromAttribute(e, t) {
        switch (t) {
        case Boolean:
            return null !== e;
        case Number:
            return null === e ? null : Number(e);
        case Object:
        case Array:
            return JSON.parse(e)
        }
        return e
    }
}
  , hr = (e,t)=>t !== e && (t == t || e == e)
  , dr = {
    attribute: !0,
    type: String,
    converter: lr,
    reflect: !1,
    hasChanged: hr
};
class cr extends HTMLElement {
    constructor() {
        super(),
        this.initialize()
    }
    static get observedAttributes() {
        this.finalize();
        const e = [];
        return this._classProperties.forEach(((t,s)=>{
            const i = this._attributeNameForProperty(s, t);
            void 0 !== i && (this._attributeToPropertyMap.set(i, s),
            e.push(i))
        }
        )),
        e
    }
    static _ensureClassProperties() {
        if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
            this._classProperties = new Map;
            const e = Object.getPrototypeOf(this)._classProperties;
            void 0 !== e && e.forEach(((e,t)=>this._classProperties.set(t, e)))
        }
    }
    static createProperty(e, t=dr) {
        if (this._ensureClassProperties(),
        this._classProperties.set(e, t),
        t.noAccessor || this.prototype.hasOwnProperty(e))
            return;
        const s = "symbol" == typeof e ? Symbol() : `__${e}`
          , i = this.getPropertyDescriptor(e, s, t);
        void 0 !== i && Object.defineProperty(this.prototype, e, i)
    }
    static getPropertyDescriptor(e, t, s) {
        return {
            get() {
                return this[t]
            },
            set(i) {
                const r = this[e];
                this[t] = i,
                this.requestUpdateInternal(e, r, s)
            },
            configurable: !0,
            enumerable: !0
        }
    }
    static getPropertyOptions(e) {
        return this._classProperties && this._classProperties.get(e) || dr
    }
    static finalize() {
        const e = Object.getPrototypeOf(this);
        if (e.hasOwnProperty("finalized") || e.finalize(),
        this.finalized = !0,
        this._ensureClassProperties(),
        this._attributeToPropertyMap = new Map,
        this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
            const e = this.properties
              , t = [...Object.getOwnPropertyNames(e), ..."function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : []];
            for (const s of t)
                this.createProperty(s, e[s])
        }
    }
    static _attributeNameForProperty(e, t) {
        const s = t.attribute;
        return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof e ? e.toLowerCase() : void 0
    }
    static _valueHasChanged(e, t, s=hr) {
        return s(e, t)
    }
    static _propertyValueFromAttribute(e, t) {
        const s = t.type
          , i = t.converter || lr
          , r = "function" == typeof i ? i : i.fromAttribute;
        return r ? r(e, s) : e
    }
    static _propertyValueToAttribute(e, t) {
        if (void 0 === t.reflect)
            return;
        const s = t.type
          , i = t.converter;
        return (i && i.toAttribute || lr.toAttribute)(e, s)
    }
    initialize() {
        this._updateState = 0,
        this._updatePromise = new Promise((e=>this._enableUpdatingResolver = e)),
        this._changedProperties = new Map,
        this._saveInstanceProperties(),
        this.requestUpdateInternal()
    }
    _saveInstanceProperties() {
        this.constructor._classProperties.forEach(((e,t)=>{
            if (this.hasOwnProperty(t)) {
                const e = this[t];
                delete this[t],
                this._instanceProperties || (this._instanceProperties = new Map),
                this._instanceProperties.set(t, e)
            }
        }
        ))
    }
    _applyInstanceProperties() {
        this._instanceProperties.forEach(((e,t)=>this[t] = e)),
        this._instanceProperties = void 0
    }
    connectedCallback() {
        this.enableUpdating()
    }
    enableUpdating() {
        void 0 !== this._enableUpdatingResolver && (this._enableUpdatingResolver(),
        this._enableUpdatingResolver = void 0)
    }
    disconnectedCallback() {}
    attributeChangedCallback(e, t, s) {
        t !== s && this._attributeToProperty(e, s)
    }
    _propertyToAttribute(e, t, s=dr) {
        const i = this.constructor
          , r = i._attributeNameForProperty(e, s);
        if (void 0 !== r) {
            const e = i._propertyValueToAttribute(t, s);
            if (void 0 === e)
                return;
            this._updateState = 8 | this._updateState,
            null == e ? this.removeAttribute(r) : this.setAttribute(r, e),
            this._updateState = -9 & this._updateState
        }
    }
    _attributeToProperty(e, t) {
        if (8 & this._updateState)
            return;
        const s = this.constructor
          , i = s._attributeToPropertyMap.get(e);
        if (void 0 !== i) {
            const e = s.getPropertyOptions(i);
            this._updateState = 16 | this._updateState,
            this[i] = s._propertyValueFromAttribute(t, e),
            this._updateState = -17 & this._updateState
        }
    }
    requestUpdateInternal(e, t, s) {
        let i = !0;
        if (void 0 !== e) {
            const r = this.constructor;
            s = s || r.getPropertyOptions(e),
            r._valueHasChanged(this[e], t, s.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t),
            !0 !== s.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map),
            this._reflectingProperties.set(e, s))) : i = !1
        }
        !this._hasRequestedUpdate && i && (this._updatePromise = this._enqueueUpdate())
    }
    requestUpdate(e, t) {
        return this.requestUpdateInternal(e, t),
        this.updateComplete
    }
    async _enqueueUpdate() {
        this._updateState = 4 | this._updateState;
        try {
            await this._updatePromise
        } catch (e) {}
        const e = this.performUpdate();
        return null != e && await e,
        !this._hasRequestedUpdate
    }
    get _hasRequestedUpdate() {
        return 4 & this._updateState
    }
    get hasUpdated() {
        return 1 & this._updateState
    }
    performUpdate() {
        if (!this._hasRequestedUpdate)
            return;
        this._instanceProperties && this._applyInstanceProperties();
        let e = !1;
        const t = this._changedProperties;
        try {
            e = this.shouldUpdate(t),
            e ? this.update(t) : this._markUpdated()
        } catch (t) {
            throw e = !1,
            this._markUpdated(),
            t
        }
        e && (1 & this._updateState || (this._updateState = 1 | this._updateState,
        this.firstUpdated(t)),
        this.updated(t))
    }
    _markUpdated() {
        this._changedProperties = new Map,
        this._updateState = -5 & this._updateState
    }
    get updateComplete() {
        return this._getUpdateComplete()
    }
    _getUpdateComplete() {
        return this._updatePromise
    }
    shouldUpdate(e) {
        return !0
    }
    update(e) {
        void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach(((e,t)=>this._propertyToAttribute(t, this[t], e))),
        this._reflectingProperties = void 0),
        this._markUpdated()
    }
    updated(e) {}
    firstUpdated(e) {}
}
cr.finalized = !0;
const ur = (e,t)=>"method" === t.kind && t.descriptor && !("value"in t.descriptor) ? Object.assign(Object.assign({}, t), {
    finisher(s) {
        s.createProperty(t.key, e)
    }
}) : {
    kind: "field",
    key: Symbol(),
    placement: "own",
    descriptor: {},
    initializer() {
        "function" == typeof t.initializer && (this[t.key] = t.initializer.call(this))
    },
    finisher(s) {
        s.createProperty(t.key, e)
    }
};
function pr(e) {
    return (t,s)=>void 0 !== s ? ((e,t,s)=>{
        t.constructor.createProperty(s, e)
    }
    )(e, t, s) : ur(e, t)
}
function fr(e) {
    return pr({
        attribute: !1,
        hasChanged: null == e ? void 0 : e.hasChanged
    })
}
const mr = (e,t,s)=>{
    Object.defineProperty(t, s, e)
}
  , gr = (e,t)=>({
    kind: "method",
    placement: "prototype",
    key: t.key,
    descriptor: e
})
  , _r = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets"in Document.prototype && "replace"in CSSStyleSheet.prototype
  , wr = Symbol();
class yr {
    constructor(e, t) {
        if (t !== wr)
            throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = e
    }
    get styleSheet() {
        return void 0 === this._styleSheet && (_r ? (this._styleSheet = new CSSStyleSheet,
        this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null),
        this._styleSheet
    }
    toString() {
        return this.cssText
    }
}
(window.litElementVersions || (window.litElementVersions = [])).push("2.4.0");
const br = {};
class vr extends cr {
    static getStyles() {
        return this.styles
    }
    static _getUniqueStyles() {
        if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this)))
            return;
        const e = this.getStyles();
        if (Array.isArray(e)) {
            const t = (e,s)=>e.reduceRight(((e,s)=>Array.isArray(s) ? t(s, e) : (e.add(s),
            e)), s)
              , s = t(e, new Set)
              , i = [];
            s.forEach((e=>i.unshift(e))),
            this._styles = i
        } else
            this._styles = void 0 === e ? [] : [e];
        this._styles = this._styles.map((e=>{
            if (e instanceof CSSStyleSheet && !_r) {
                const t = Array.prototype.slice.call(e.cssRules).reduce(((e,t)=>e + t.cssText), "");
                return new yr(String(t),wr)
            }
            return e
        }
        ))
    }
    initialize() {
        super.initialize(),
        this.constructor._getUniqueStyles(),
        this.renderRoot = this.createRenderRoot(),
        window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles()
    }
    createRenderRoot() {
        return this.attachShadow({
            mode: "open"
        })
    }
    adoptStyles() {
        const e = this.constructor._styles;
        0 !== e.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? _r ? this.renderRoot.adoptedStyleSheets = e.map((e=>e instanceof CSSStyleSheet ? e : e.styleSheet)) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e=>e.cssText)), this.localName))
    }
    connectedCallback() {
        super.connectedCallback(),
        this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this)
    }
    update(e) {
        const t = this.render();
        super.update(e),
        t !== br && this.constructor.render(t, this.renderRoot, {
            scopeName: this.localName,
            eventContext: this
        }),
        this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1,
        this.constructor._styles.forEach((e=>{
            const t = document.createElement("style");
            t.textContent = e.cssText,
            this.renderRoot.appendChild(t)
        }
        )))
    }
    render() {
        return br
    }
}
vr.finalized = !0,
vr.render = (e,t,s)=>{
    if (!s || "object" != typeof s || !s.scopeName)
        throw new Error("The `scopeName` option is required.");
    const i = s.scopeName
      , r = Qi.has(t)
      , n = ir && 11 === t.nodeType && !!t.host
      , a = n && !ar.has(i)
      , o = a ? document.createDocumentFragment() : t;
    if (((e,t,s)=>{
        let i = Qi.get(t);
        void 0 === i && (yi(t, t.firstChild),
        Qi.set(t, i = new ji(Object.assign({
            templateFactory: Ji
        }, s))),
        i.appendInto(t)),
        i.setValue(e),
        i.commit()
    }
    )(e, o, Object.assign({
        templateFactory: rr(i)
    }, s)),
    a) {
        const e = Qi.get(o);
        Qi.delete(o);
        const s = e.value instanceof Bi ? e.value.template : void 0;
        or(i, o, s),
        yi(t, t.firstChild),
        t.appendChild(o),
        Qi.set(t, e)
    }
    !r && n && window.ShadyCSS.styleElement(t.host)
}
;
class Sr {
    constructor(e) {
        this.classes = new Set,
        this.changed = !1,
        this.element = e;
        const t = (e.getAttribute("class") || "").split(/\s+/);
        for (const e of t)
            this.classes.add(e)
    }
    add(e) {
        this.classes.add(e),
        this.changed = !0
    }
    remove(e) {
        this.classes.delete(e),
        this.changed = !0
    }
    commit() {
        if (this.changed) {
            let e = "";
            this.classes.forEach((t=>e += t + " ")),
            this.element.setAttribute("class", e)
        }
    }
}
const kr = new WeakMap
  , xr = Oi((e=>t=>{
    if (!(t instanceof Zi) || t instanceof Xi || "class" !== t.committer.name || t.committer.parts.length > 1)
        throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
    const {committer: s} = t
      , {element: i} = s;
    let r = kr.get(t);
    void 0 === r && (i.setAttribute("class", s.strings.join(" ")),
    kr.set(t, r = new Set));
    const n = i.classList || new Sr(i);
    r.forEach((t=>{
        t in e || (n.remove(t),
        r.delete(t))
    }
    ));
    for (const t in e) {
        const s = e[t];
        s != r.has(t) && (s ? (n.add(t),
        r.add(t)) : (n.remove(t),
        r.delete(t)))
    }
    "function" == typeof n.commit && n.commit()
}
))
  , Er = new WeakMap
  , Ar = Oi((e=>t=>{
    const s = Er.get(t);
    if (void 0 === e && t instanceof Zi) {
        if (void 0 !== s || !Er.has(t)) {
            const e = t.committer.name;
            t.committer.element.removeAttribute(e)
        }
    } else
        e !== s && t.setValue(e);
    Er.set(t, e)
}
))
  , zr = new WeakMap
  , Cr = Oi((e=>t=>{
    if (!(t instanceof Zi) || t instanceof Xi || "style" !== t.committer.name || t.committer.parts.length > 1)
        throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
    const {committer: s} = t
      , {style: i} = s.element;
    let r = zr.get(t);
    void 0 === r && (i.cssText = s.strings.join(" "),
    zr.set(t, r = new Set)),
    r.forEach((t=>{
        t in e || (r.delete(t),
        -1 === t.indexOf("-") ? i[t] = null : i.removeProperty(t))
    }
    ));
    for (const t in e)
        r.add(t),
        -1 === t.indexOf("-") ? i[t] = e[t] : i.setProperty(t, e[t])
}
));
class Rr extends vr {
    constructor() {
        super(...arguments),
        this.indeterminate = !1,
        this.progress = 0,
        this.buffer = 1,
        this.reverse = !1,
        this.closed = !1,
        this.stylePrimaryHalf = "",
        this.stylePrimaryFull = "",
        this.styleSecondaryQuarter = "",
        this.styleSecondaryHalf = "",
        this.styleSecondaryFull = "",
        this.animationReady = !0,
        this.closedAnimationOff = !1,
        this.resizeObserver = null
    }
    connectedCallback() {
        super.connectedCallback(),
        this.rootEl && this.attachResizeObserver()
    }
    render() {
        const e = {
            "mdc-linear-progress--closed": this.closed,
            "mdc-linear-progress--closed-animation-off": this.closedAnimationOff,
            "mdc-linear-progress--indeterminate": this.indeterminate,
            "mdc-linear-progress--animation-ready": this.animationReady
        }
          , t = {
            "--mdc-linear-progress-primary-half": this.stylePrimaryHalf,
            "--mdc-linear-progress-primary-half-neg": "" !== this.stylePrimaryHalf ? `-${this.stylePrimaryHalf}` : "",
            "--mdc-linear-progress-primary-full": this.stylePrimaryFull,
            "--mdc-linear-progress-primary-full-neg": "" !== this.stylePrimaryFull ? `-${this.stylePrimaryFull}` : "",
            "--mdc-linear-progress-secondary-quarter": this.styleSecondaryQuarter,
            "--mdc-linear-progress-secondary-quarter-neg": "" !== this.styleSecondaryQuarter ? `-${this.styleSecondaryQuarter}` : "",
            "--mdc-linear-progress-secondary-half": this.styleSecondaryHalf,
            "--mdc-linear-progress-secondary-half-neg": "" !== this.styleSecondaryHalf ? `-${this.styleSecondaryHalf}` : "",
            "--mdc-linear-progress-secondary-full": this.styleSecondaryFull,
            "--mdc-linear-progress-secondary-full-neg": "" !== this.styleSecondaryFull ? `-${this.styleSecondaryFull}` : ""
        }
          , s = {
            "flex-basis": this.indeterminate ? "100%" : 100 * this.buffer + "%"
        }
          , i = {
            transform: this.indeterminate ? "scaleX(1)" : `scaleX(${this.progress})`
        };
        return tr`
      <div
          role="progressbar"
          class="mdc-linear-progress ${xr(e)}"
          style="${Cr(t)}"
          dir="${Ar(this.reverse ? "rtl" : void 0)}"
          aria-label="${Ar(this.ariaLabel)}"
          aria-valuemin="0"
          aria-valuemax="1"
          aria-valuenow="${Ar(this.indeterminate ? void 0 : this.progress)}"
        @transitionend="${this.syncClosedState}">
        <div class="mdc-linear-progress__buffer">
          <div
            class="mdc-linear-progress__buffer-bar"
            style=${Cr(s)}>
          </div>
          <div class="mdc-linear-progress__buffer-dots"></div>
        </div>
        <div
            class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"
            style=${Cr(i)}>
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
        <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
      </div>`
    }
    update(e) {
        !e.has("closed") || this.closed && void 0 !== e.get("closed") || this.syncClosedState(),
        super.update(e)
    }
    async firstUpdated(e) {
        super.firstUpdated(e),
        this.attachResizeObserver()
    }
    syncClosedState() {
        this.closedAnimationOff = this.closed
    }
    updated(e) {
        !e.has("indeterminate") && e.has("reverse") && this.indeterminate && this.restartAnimation(),
        e.has("indeterminate") && void 0 !== e.get("indeterminate") && this.indeterminate && window.ResizeObserver && this.calculateAndSetAnimationDimensions(this.rootEl.offsetWidth),
        super.updated(e)
    }
    disconnectedCallback() {
        this.resizeObserver && (this.resizeObserver.disconnect(),
        this.resizeObserver = null),
        super.disconnectedCallback()
    }
    attachResizeObserver() {
        if (window.ResizeObserver)
            return this.resizeObserver = new window.ResizeObserver((e=>{
                if (this.indeterminate)
                    for (const t of e)
                        if (t.contentRect) {
                            const e = t.contentRect.width;
                            this.calculateAndSetAnimationDimensions(e)
                        }
            }
            )),
            void this.resizeObserver.observe(this.rootEl);
        this.resizeObserver = null
    }
    calculateAndSetAnimationDimensions(e) {
        const t = .8367142 * e
          , s = 2.00611057 * e
          , i = .37651913 * e
          , r = .84386165 * e
          , n = 1.60277782 * e;
        this.stylePrimaryHalf = `${t}px`,
        this.stylePrimaryFull = `${s}px`,
        this.styleSecondaryQuarter = `${i}px`,
        this.styleSecondaryHalf = `${r}px`,
        this.styleSecondaryFull = `${n}px`,
        this.restartAnimation()
    }
    async restartAnimation() {
        this.animationReady = !1,
        await this.updateComplete,
        await new Promise(requestAnimationFrame),
        this.animationReady = !0,
        await this.updateComplete
    }
    open() {
        this.closed = !1
    }
    close() {
        this.closed = !0
    }
}
var Ur, Pr;
_i([(Ur = ".mdc-linear-progress",
(e,t)=>{
    const s = {
        get() {
            return this.renderRoot.querySelector(Ur)
        },
        enumerable: !0,
        configurable: !0
    };
    if (Pr) {
        const e = "symbol" == typeof t ? Symbol() : `__${t}`;
        s.get = function() {
            return void 0 === this[e] && (this[e] = this.renderRoot.querySelector(Ur)),
            this[e]
        }
    }
    return void 0 !== t ? mr(s, e, t) : gr(s, e)
}
)], Rr.prototype, "rootEl", void 0),
_i([pr({
    type: Boolean,
    reflect: !0
})], Rr.prototype, "indeterminate", void 0),
_i([pr({
    type: Number
})], Rr.prototype, "progress", void 0),
_i([pr({
    type: Number
})], Rr.prototype, "buffer", void 0),
_i([pr({
    type: Boolean,
    reflect: !0
})], Rr.prototype, "reverse", void 0),
_i([pr({
    type: Boolean,
    reflect: !0
})], Rr.prototype, "closed", void 0),
_i([function(e, t, s) {
    if (void 0 !== t)
        return function(e, t, s) {
            const i = e.constructor;
            if (!s) {
                const e = `__${t}`;
                if (!(s = i.getPropertyDescriptor(t, e)))
                    throw new Error("@ariaProperty must be used after a @property decorator")
            }
            const r = s;
            let n = "";
            if (!r.set)
                throw new Error(`@ariaProperty requires a setter for ${t}`);
            const a = {
                configurable: !0,
                enumerable: !0,
                set(e) {
                    if ("" === n) {
                        const e = i.getPropertyOptions(t);
                        n = e.attribute
                    }
                    this.hasAttribute(n) && this.removeAttribute(n),
                    r.set.call(this, e)
                }
            };
            return r.get && (a.get = function() {
                return r.get.call(this)
            }
            ),
            a
        }(e, t, s);
    throw new Error("@ariaProperty only supports TypeScript Decorators")
}
, pr({
    attribute: "aria-label"
})], Rr.prototype, "ariaLabel", void 0),
_i([fr()], Rr.prototype, "stylePrimaryHalf", void 0),
_i([fr()], Rr.prototype, "stylePrimaryFull", void 0),
_i([fr()], Rr.prototype, "styleSecondaryQuarter", void 0),
_i([fr()], Rr.prototype, "styleSecondaryHalf", void 0),
_i([fr()], Rr.prototype, "styleSecondaryFull", void 0),
_i([fr()], Rr.prototype, "animationReady", void 0),
_i([fr()], Rr.prototype, "closedAnimationOff", void 0);
const Or = ((e,...t)=>{
    const s = t.reduce(((t,s,i)=>t + (e=>{
        if (e instanceof yr)
            return e.cssText;
        if ("number" == typeof e)
            return e;
        throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)
    }
    )(s) + e[i + 1]), e[0]);
    return new yr(s,wr)
}
)`@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%);transform:translateX(var(--mdc-linear-progress-primary-half, 83.67142%))}100%{transform:translateX(200.611057%);transform:translateX(var(--mdc-linear-progress-primary-full, 200.611057%))}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%);transform:translateX(var(--mdc-linear-progress-secondary-quarter, 37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%);transform:translateX(var(--mdc-linear-progress-secondary-half, 84.386165%))}100%{transform:translateX(160.277782%);transform:translateX(var(--mdc-linear-progress-secondary-full, 160.277782%))}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(-10px)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(-83.67142%);transform:translateX(var(--mdc-linear-progress-primary-half-neg, -83.67142%))}100%{transform:translateX(-200.611057%);transform:translateX(var(--mdc-linear-progress-primary-full-neg, -200.611057%))}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(-37.651913%);transform:translateX(var(--mdc-linear-progress-secondary-quarter-neg, -37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(-84.386165%);transform:translateX(var(--mdc-linear-progress-secondary-half-neg, -84.386165%))}100%{transform:translateX(-160.277782%);transform:translateX(var(--mdc-linear-progress-secondary-full-neg, -160.277782%))}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}.mdc-linear-progress{position:relative;width:100%;height:4px;transform:translateZ(0);outline:1px solid transparent;overflow:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar{position:absolute;width:100%;height:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top:4px solid}.mdc-linear-progress__buffer{display:flex;position:absolute;width:100%;height:100%}.mdc-linear-progress__buffer-dots{background-repeat:repeat-x;background-size:10px 4px;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering 250ms infinite linear}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress__secondary-bar{visibility:hidden}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;visibility:visible}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__bar{right:0;-webkit-transform-origin:center right;transform-origin:center right}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__buffer-dots,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}.mdc-linear-progress--closed{opacity:0}.mdc-linear-progress--closed-animation-off .mdc-linear-progress__buffer-dots{animation:none}.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar,.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar .mdc-linear-progress__bar-inner{animation:none}.mdc-linear-progress__bar-inner{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-linear-progress__buffer-dots{background-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E")}.mdc-linear-progress__buffer-bar{background-color:#e6e6e6}:host{display:block}.mdc-linear-progress__buffer-bar{background-color:#e6e6e6;background-color:var(--mdc-linear-progress-buffer-color, #e6e6e6)}.mdc-linear-progress__buffer-dots{background-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E");background-image:var(--mdc-linear-progress-buffering-dots-image, url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E"))}`;
let Tr = class extends Rr {
}
;
var Ir;
Tr.styles = Or,
Tr = _i([(Ir = "mwc-linear-progress",
e=>"function" == typeof e ? ((e,t)=>(window.customElements.define(e, t),
t))(Ir, e) : ((e,t)=>{
    const {kind: s, elements: i} = t;
    return {
        kind: s,
        elements: i,
        finisher(t) {
            window.customElements.define(e, t)
        }
    }
}
)(Ir, e))], Tr);
var Nr = function(e, t, s, i) {
    var r, n = arguments.length, a = n < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, s) : i;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
        a = Reflect.decorate(e, t, s, i);
    else
        for (var o = e.length - 1; o >= 0; o--)
            (r = e[o]) && (a = (n < 3 ? r(a) : n > 3 ? r(t, s, a) : r(t, s)) || a);
    return n > 3 && a && Object.defineProperty(t, s, a),
    a
};
let Br = class extends hi {
    constructor() {
        super(...arguments),
        this._indeterminate = !0,
        this._progress = 0
    }
    processState(e) {
        this._state = e,
        "writing" === this._state.state && (this._indeterminate = !1,
        this._progress = this._state.details.percentage / 100),
        "error" === this._state.state && (this._indeterminate = !1)
    }
    clear() {
        this._state = void 0,
        this._progress = 0,
        this._indeterminate = !0
    }
    render() {
        if (this._state)
            return Zs`<h2
        class=${fi({
                error: "error" === this._state.state,
                done: "finished" === this._state.state
            })}
      >
        ${this._state.message}
      </h2>
      <p>
        ${this._state.manifest ? Zs`${this._state.manifest.name}: ${this._state.chipFamily}` : Zs`&nbsp;`}
      </p>
      <mwc-linear-progress
        class=${fi({
                error: "error" === this._state.state,
                done: "finished" === this._state.state
            })}
        .indeterminate=${this._indeterminate}
        .progress=${this._progress}
      ></mwc-linear-progress>`
    }
}
;
Br.styles = ps`
    :host {
      display: block;
      --mdc-theme-primary: var(--esp-tools-progress-color, #03a9f4);
    }
    .error {
      color: var(--esp-tools-error-color, #dc3545);
      --mdc-theme-primary: var(--esp-tools-error-color, #dc3545);
    }
    .done {
      color: var(--esp-tools-success-color, #28a745);
      --mdc-theme-primary: var(--esp-tools-success-color, #28a745);
    }
    mwc-linear-progress {
      text-align: left;
    }
    h2 {
      margin: 16px 0 0;
    }
    p {
      margin: 4px 0;
    }
  `,
Nr([ui()], Br.prototype, "_state", void 0),
Nr([ui()], Br.prototype, "_indeterminate", void 0),
Nr([ui()], Br.prototype, "_progress", void 0),
Br = Nr([di("esp-web-flash-progress")], Br);
let Fr, $r, Dr, Mr = !1;
const Lr = (e,t)=>(e.renderRoot.append(t),
t)
  , Hr = async e=>{
    if (e.hasAttribute("active"))
        return;
    const t = e.manifest || e.getAttribute("manifest");
    if (!t)
        return void alert("No manifest defined!");
    let s = !1;
    Mr || (Mr = !0,
    e.addEventListener("state-changed", (t=>{
        var i;
        const r = e.state = t.detail;
        "initializing" === r.state ? e.toggleAttribute("active", !0) : "manifest" === r.state && (null === (i = r.build) || void 0 === i ? void 0 : i.improv) ? (s = !0,
        import("https://www.improv-wifi.com/sdk-js/launch-button.js")) : "finished" === r.state ? (e.toggleAttribute("active", !1),
        s && Zr(e)) : "error" === r.state && e.toggleAttribute("active", !1),
        null == $r || $r.processState(t.detail),
        null == Fr || Fr.processState(t.detail)
    }
    )));
    const i = e.logConsole || e.hasAttribute("log-console")
      , r = e.showLog || e.hasAttribute("show-log")
      , n = !r && !0 !== e.hideProgress && !e.hasAttribute("hide-progress");
    r && !Fr ? Fr = Lr(e, document.createElement("esp-web-flash-log")) : !r && Fr && (Fr.remove(),
    Fr = void 0),
    n && !$r ? $r = Lr(e, document.createElement("esp-web-flash-progress")) : !n && $r && ($r.remove(),
    $r = void 0),
    null == Fr || Fr.clear(),
    null == $r || $r.clear(),
    null == Dr || Dr.classList.toggle("hidden", !0),
    os(e, i ? console : {
        log: ()=>{}
        ,
        error: ()=>{}
        ,
        debug: ()=>{}
    }, t, void 0 !== e.eraseFirst ? e.eraseFirst : e.hasAttribute("erase-first"))
}
  , Zr = async e=>{
    await import("https://www.improv-wifi.com/sdk-js/launch-button.js");
    const t = customElements.get("improv-wifi-launch-button");
    if (t.isSupported && t.isAllowed) {
        if (!Dr) {
            Dr = document.createElement("improv-wifi-launch-button"),
            Dr.addEventListener("state-changed", (e=>{
                "PROVISIONED" === e.detail.state && Dr.classList.toggle("hidden", !0)
            }
            ));
            const t = document.createElement("button");
            t.slot = "activate",
            t.textContent = "CLICK HERE TO FINISH SETTING UP YOUR DEVICE",
            Dr.appendChild(t),
            Lr(e, Dr)
        }
        Dr.classList.toggle("hidden", !1)
    }
}
;
export {Hr as startFlash};
