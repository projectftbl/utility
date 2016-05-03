var _ = require('lodash')
  , should = require('chai').should()
  , utility = require('../lib');

describe('utility', function() {
  
  var suite = this;

  describe('random', function() {
    
    before(function() {
    });
    
    it('should ', function() {
    });

  });
  
  describe('encrypt', function() {

    before(function() {
    });
    
    it('should ', function() {
    });

  });
  
  describe('decrypt', function() {

    before(function() {
    });
    
    it('should ', function() {
    });

  });
  
  describe('token', function() {

    before(function() {
    });
    
    it('should ', function() {
    });

  });
  
  describe('slugify', function() {

    before(function() {
    });
    
    it('should ', function() {
    });

  });
  
  describe('percentage', function() {

    before(function() {
    });
    
    it('should ', function() {
    });

  });
  
  describe('getApp', function() {

    before(function() {
    });
    
    it('should ', function() {
    });

  });
  
  describe('folders', function() {

    before(function() {
    });
    
    it('should ', function() {
    });

  });  

  describe('constructUsers', function() {

    var users = [
      'system/password/system'
    , 'guest/secret/guest' 
    ];

    var roles = [
      { name: 'Guest', handle: 'guest', claims: [ 
          { entity: 'member', 'right': 1 } 
        , { entity: 'user', 'right': 1 } 
        ] 
      }
    , { name: 'System', handle: 'system', claims: [ 
          { entity: 'member', right: 15 } 
        , { entity: 'user', right: 15 } 
        , { entity: 'system', right: 15 } 
        ]
      }
    ];

    before(function() {
      suite.users = utility.constructUsers(users, roles);
    });
    
    it('should generate 2 users', function() {
      suite.users.length.should.equal(2);
    });
    
    it('should generate guest user', function() {
      _(suite.users).find({ name: 'guest' }).should.exist;
    });
    
    it('should generate system user', function() {
      _(suite.users).find({ name: 'system' }).should.exist;
    });
    
    it('should not generate support user', function() {
      should.not.exist(_(suite.users).find({ name: 'support' }));
    });

  });
  
});