// 1. `assert.async()`
// Instrua o QUnit a aguardar uma operação assíncrona.

QUnit.test("Teste com assert.async", function(assert) {
    var done = assert.async();
    setTimeout(function() {
        assert.ok(true, "Passou após operação assíncrona");
        done();
    }, 1000);
});


//  2. `assert.closeTo()`
// Compare se um número é igual dentro de uma determinada tolerância.

QUnit.test("Teste com assert.closeTo", function(assert) {
    assert.closeTo(1.99, 2, 0.1, "1.99 está próximo de 2 com tolerância de 0.1");
});


//  3. `assert.deepEqual()`
// Uma comparação recursiva e estrita.

QUnit.test("Teste com assert.deepEqual", function(assert) {
    var obj1 = { nome: "Alice", idade: 25 };
    var obj2 = { nome: "Alice", idade: 25 };
    var obj3 = { nome: "Alice M", idade: 25 };
    assert.deepEqual(obj1, obj2, "Os objetos são iguais");
    assert.deepEqual(obj1, obj3, "Os objetos NÃO são iguais");
});


//  4. `assert.equal()`
// Uma comparação não estrita. 

QUnit.test("Teste com assert.equal", function(assert) {
    assert.equal(1, "1", "Valores iguais, tipos diferentes");
});


//  5. `assert.expect()`
// Especifique quantas asserções são esperadas em um teste.

QUnit.test("Teste com assert.expect", function(assert) {
    assert.expect(2);
    assert.ok(true, "Primeira asserção");
    assert.ok(true, "Segunda asserção");
});


//  6. `assert.false()`
// Uma comparação falsa booleana estrita.

QUnit.test("Teste com assert.false", function(assert) {
    assert.false(1 == 2 , "O valor é estritamente falso");
});


//  7. `assert.notDeepEqual()`
// Uma comparação profunda e igual invertida.

QUnit.test("Teste com assert.notDeepEqual", function(assert) {
    var obj1 = { nome: "Alice" };
    var obj2 = { nome: "Bob" };
    assert.notDeepEqual(obj1, obj2, "Os objetos são diferentes");
});


//  8. `assert.notEqual()`
// Uma comparação frouxa de desigualdade.

QUnit.test("Teste com assert.notEqual", function(assert) {
    assert.notEqual(1, 2, "1 não é igual a 2");
});


//  9. `assert.notOk()`
// Verifique se o primeiro argumento é falso.

QUnit.test("Teste com assert.notOk", function(assert) {
    assert.notOk(false, "O valor é falsy");
});


//  10. `assert.notPropContains()`
// Verifique se um objeto não contém certas propriedades.

QUnit.test("Teste com assert.notPropContains", function(assert) {
    var obj = { nome: "Alice", idade: 25 };
    assert.notPropContains(obj, { sobrenome: "Silva" }, "Objeto não contém sobrenome");
});


//  11. `assert.notPropEqual()`
// Compare as propriedades de um objeto em relação à desigualdade.

QUnit.test("Teste com assert.notPropEqual", function(assert) {
    var obj1 = { nome: "Alice", idade: 25 };
    var obj2 = { nome: "Bob", idade: 25 };
    assert.notPropEqual(obj1, obj2, "Os objetos possuem propriedades diferentes");
});


//  12. `assert.notStrictEqual()`
// Uma comparação rigorosa, verificando a desigualdade.

QUnit.test("Teste com assert.notStrictEqual", function(assert) {
    assert.notStrictEqual(1, "1", "1 não é estritamente igual a '1'");
});


//  13. `assert.ok()`
// Verifique se o primeiro argumento é verdadeiro.

QUnit.test("Teste com assert.ok", function(assert) {
    assert.ok(true, "O valor é truthy");
});


//  14. `assert.propContains()`
// Verifique se um objeto contém certas propriedades.

QUnit.test("Teste com assert.propContains", function(assert) {
    var obj = { nome: "Alice", idade: 25 };
    assert.propContains(obj, { nome: "Alice" }, "O objeto contém a propriedade 'nome'");
});


//  15. `assert.propEqual()`
// Compare as propriedades de um objeto.

QUnit.test("Teste com assert.propEqual", function(assert) {
    var obj1 = { nome: "Alice", idade: 25 };
    var obj2 = { nome: "Alice", idade: 25 };
    assert.propEqual(obj1, obj2, "As propriedades do objeto são iguais");
});


//  16. `assert.pushResult()`
// Relatar o resultado de uma asserção personalizada.

QUnit.test("Teste com assert.pushResult", function(assert) {
    var resultado = true;
    assert.pushResult({
        result: resultado,
        actual: resultado,
        expected: true,
        message: "Resultado customizado"
    });
});


//  17. `assert.rejects()`
// Teste se a promessa fornecida é rejeitada.

QUnit.test("Teste com assert.rejects", function(assert) {
    return assert.rejects(Promise.reject(new Error("Erro!")), "Promise foi rejeitada corretamente");
});


//  18. `assert.step()`
//Registre uma etapa para verificação posterior.

QUnit.test("Teste com assert.step", function(assert) {
    assert.step("primeiro");
    assert.step("segundo");
    assert.verifySteps(["primeiro", "segundo"], "Passos ocorreram na ordem correta");
});


//  19. `assert.strictEqual()`
// Uma comparação rigorosa de tipo e valor.

QUnit.test("Teste com assert.strictEqual", function(assert) {
    assert.strictEqual(1, 1, "Os valores e tipos são estritamente iguais");
});


//  20. `assert.throws()`
// Teste se um retorno de chamada gera uma exceção.

QUnit.test("Teste com assert.throws", function(assert) {
    assert.throws(function() {
        throw new Error("Erro!");
    }, "Erro foi lançado corretamente");
});


//  21. `assert.timeout()`
// Quanto tempo esperar por operações assíncronas.

QUnit.test("Teste com assert.timeout", function(assert) {
    assert.timeout(500); // Define o tempo limite do teste como 500ms
    var done = assert.async();
    setTimeout(function() {
        assert.ok(true, "O teste foi concluído antes do timeout");
        done();
    }, 300);
});


//  22. `assert.true()`
// Uma comparação booleana estrita verdadeira.

QUnit.test("Teste com assert.true", function(assert) {
    assert.true(true, "O valor é estritamente true");
});


//  23. `assert.verifySteps()`
// Verifique a ordem exata dos passos.

QUnit.test("Teste com assert.verifySteps", function(assert) {
    assert.step("etapa 1");
    assert.step("etapa 2");
    assert.verifySteps(["etapa 1", "etapa 2"], "As etapas foram realizadas na ordem correta");
});