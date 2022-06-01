QUnit.module("megfordit", function () {
    QUnit.test("A megfordit függvény létezik e?", function (assert) {
      assert.ok(megfordit, "létezik-e amegfordit");
    });
    QUnit.test("A megfordit függvény-e?", function (assert) {
        assert.ok(typeof megfordit === "function", "függvény a megfordit");
      });
});
QUnit.module('Számok ellenőrzése', function () {
    QUnit.test('123', function (assert) {
        assert.equal(megfordit("123"), "321");
    });
});
QUnit.module('Nagybetűk ellenőrzése', function () {
    QUnit.test('Nagy betűk', function (assert) {
        assert.equal(megfordit("HELLO"), "OLLEH");
    });
});
QUnit.module('Szóköz ellenőrzése', function () {
    QUnit.test('Nagy betűk és írásjelek ellenőrzése', function (assert) {
        assert.equal(megfordit("Szép napot!"), "!topan pézS");
    });
});
QUnit.module('Fordított szavak', function () {
    QUnit.test('Fordított szavak ellenőrzése', function (assert) {
        assert.equal(megfordit("akloksI"), "Iskolka");
    });
});
QUnit.module('Leghosszabb szó', function () {
    QUnit.test('Leghosszabb magyar szó ellenőrzése', function (assert) {
        assert.equal(megfordit("széttöredezettségmentesíthetőtlenítetthetőtetlenségtelenítőtlenkedhetőiteknek"), "kenketiőtehdekneltőtíneletgésneltetőtehttetíneltőtehtísetnemgésttezederöttézs");
    });
});
QUnit.module('Egyéb írásjegyek', function () {
    QUnit.test('Egyéb írásjegyek ellenőrzése', function (assert) {
        assert.equal(megfordit("昨日すき焼きを食べました"), "たしまべ食をき焼きす日昨");
    });
});