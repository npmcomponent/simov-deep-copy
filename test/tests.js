
chai.should();
mocha.setup({
    ui: 'bdd',
    globals: ['']
});

window.addEventListener('load', function (e) {
    mocha.run();
});


describe('deep-copy', function () {
    var obj = {
        a: 0,
        b: [0,1,2],
        c: {
            a: 0,
            b: 1,
        }
    };
    var arr = [
        0,
        1,
        {
            a: 0,
            b: {
                c: 1
            }
        }
    ];

    it('deep copy an object - check out the console', function (done) {
        var copy = dcopy(obj);
        copy.c = {c: 15};
        obj.c.should.deep.equal({a: 0, b: 1});
        copy.c.should.deep.equal({c: 15});
        console.log('obj%O- copy%O', obj, copy);
        done();
    });

    it('deep copy an array - check out the console', function (done) {
        var copy = dcopy(arr);
        copy[2].b = {d: 15};
        arr[2].b.should.deep.equal({c: 1});
        copy[2].b.should.deep.equal({d: 15});
        console.log('arr%O- copy%O', arr, copy);
        done();
    });
});
