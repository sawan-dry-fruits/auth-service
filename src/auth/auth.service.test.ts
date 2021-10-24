import * as jwt from '@nestjs/jwt';
import * as Repository_d from '../../node_modules/typeorm/repository/Repository.d';
import * as auth_service from './auth.service';
// @ponicode
describe('findOne', () => {
  let inst: any;
  let inst2: any;
  let inst3: any;

  beforeEach(() => {
    inst = new jwt.JwtService({
      signOptions: {
        algorithm: undefined,
        keyid: '',
        expiresIn: NaN,
        notBefore: '',
        audience: '',
        subject: '',
        issuer: '',
        jwtid: '',
        mutatePayload: true,
        noTimestamp: true,
        header: undefined,
        encoding: '',
      },
      secret: '',
      publicKey: '',
      privateKey: { key: '', passphrase: '' },
      secretOrPrivateKey: { key: '', passphrase: '' },
      secretOrKeyProvider: () => ({ key: '', passphrase: '' }),
      verifyOptions: {
        algorithms: undefined,
        audience: '',
        clockTimestamp: NaN,
        clockTolerance: NaN,
        complete: false,
        issuer: '',
        ignoreExpiration: true,
        ignoreNotBefore: false,
        jwtid: '',
        nonce: '',
        subject: '',
        maxAge: '',
      },
    });
    inst2 = new Repository_d.Repository();
    inst3 = new auth_service.AuthService(inst, inst2);
  });

  test('0', async () => {
    await inst3.findOne(undefined, undefined, undefined);
  });
});

// @ponicode
describe('getUser', () => {
  let inst: any;
  let inst2: any;
  let inst3: any;

  beforeEach(() => {
    inst = new jwt.JwtService({
      signOptions: {
        algorithm: undefined,
        keyid: '',
        expiresIn: -Infinity,
        notBefore: -Infinity,
        audience: '',
        subject: '',
        issuer: '',
        jwtid: '',
        mutatePayload: true,
        noTimestamp: false,
        header: undefined,
        encoding: '',
      },
      secret: '',
      publicKey: '',
      privateKey: '',
      secretOrPrivateKey: { key: '', passphrase: '' },
      secretOrKeyProvider: () => ({
        BYTES_PER_ELEMENT: -Infinity,
        buffer: false,
        byteLength: -Infinity,
        byteOffset: -Infinity,
        length: -Infinity,
        key0: -Infinity,
        key1: -Infinity,
      }),
      verifyOptions: {
        algorithms: undefined,
        audience: '',
        clockTimestamp: -Infinity,
        clockTolerance: -Infinity,
        complete: true,
        issuer: '',
        ignoreExpiration: false,
        ignoreNotBefore: false,
        jwtid: '',
        nonce: '',
        subject: '',
        maxAge: '',
      },
    });
    inst2 = new Repository_d.Repository();
    inst3 = new auth_service.AuthService(inst, inst2);
  });

  test('0', async () => {
    await inst3.getUser(undefined);
  });
});
