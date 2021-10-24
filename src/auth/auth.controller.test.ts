import * as jwt from '@nestjs/jwt';
import * as Repository_d from '../../node_modules/typeorm/repository/Repository.d';
import * as auth_controller from './auth.controller';
import * as auth_service from './auth.service';
// @ponicode
describe('register', () => {
  let inst: any;
  let inst2: any;
  let inst3: any;
  let inst4: any;

  beforeEach(() => {
    inst = new jwt.JwtService({
      signOptions: {
        algorithm: undefined,
        keyid: '',
        expiresIn: NaN,
        notBefore: NaN,
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
      privateKey: '',
      secretOrPrivateKey: { key: '', passphrase: '' },
      secretOrKeyProvider: () => '',
      verifyOptions: {
        algorithms: undefined,
        audience: '',
        clockTimestamp: NaN,
        clockTolerance: NaN,
        complete: false,
        issuer: '',
        ignoreExpiration: true,
        ignoreNotBefore: true,
        jwtid: '',
        nonce: '',
        subject: '',
        maxAge: '',
      },
    });
    inst2 = new Repository_d.Repository();
    inst3 = new auth_service.AuthService(inst, inst2);
    inst4 = new auth_controller.AuthController(inst3);
  });

  test('0', () => {
    inst4.register(undefined);
  });
});
