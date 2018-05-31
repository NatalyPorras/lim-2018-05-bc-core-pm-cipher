describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () =>{
      assert.equal(cipher.encode("33","ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "HIJKLMNOPQRSTUVWXYZABCDEFG");
    });

    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () =>{
      assert.equal(cipher.encode("33","abcdefghijklmnopqrstuvwxyz"), "hijklmnopqrstuvwxyzabcdefg");
    });

    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () =>{
      assert.equal(cipher.encode("33","ab\u0000cdefghijklmnopqrstuvwxyz"), "hi\u0000jklmnopqrstuvwxyzabcdefg");
    });

  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', ()=> {
      assert.equal(cipher.decode("33","HIJKLMNOPQRSTUVWXYZABCDEFG"), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });

    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () =>{
      assert.equal(cipher.decode("33","hijklmnopqrstuvwxyzabcdefg"), "abcdefghijklmnopqrstuvwxyz");
    });

    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () =>{
      assert.equal(cipher.decode("33","hi\u0000jklmnopqrstuvwxyzabcdefg"), "ab\u0000cdefghijklmnopqrstuvwxyz");
    });
  });

  describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });
    it('debería ser un object', () => {
      assert.equal(typeof cipher.createCipherWithOffset(1), 'object');
    });
    it('debería ser un funcion', () => {
      assert.equal(typeof cipher.createCipherWithOffset(1).encode, 'function');
    });
    it('debería ser un funcion', () => {
      assert.equal(cipher.createCipherWithOffset(1).encode("a"), 'b');
    });
    it('debería ser un funcion', () => {
      assert.equal(cipher.createCipherWithOffset(1).decode("b"), 'a');
    });
  });
});