import {expect} from 'chai'
import tenxDev from './index'

describe('tenXDev', function () {
  it('should return Yes!! if I am a vim user', function () {
    expect(tenxDev.amITenXDev(true)).to.eql('Yes!!')
  })
})
