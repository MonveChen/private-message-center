import { Test, TestingModule } from '@nestjs/testing';
import { DingtalkController } from './dingtalk.controller';

describe('DingtalkController', () => {
  let controller: DingtalkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DingtalkController],
    }).compile();

    controller = module.get<DingtalkController>(DingtalkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
