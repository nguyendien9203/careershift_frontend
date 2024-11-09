import React from 'react';

import Input from '../common/Input';
import Button from '../common/Button';

const ForgotPasswordForm: React.FC = () => {
  return (
    <form className="flex flex-col justify-center items-center gap-y-2.5">
        {/* Email field */}
      <div className="w-full mb-5">
        <Input
          label="Email"
          type="email"
          placeholder="Nhập email của bạn"
          id="email"
          icon="bi-envelope"
          layout="vertical"
        />
      </div>

      <div className="w-full mb-5">
        <Button variant='primary'>Tiếp tục</Button>
      </div>

      <Button variant='no-boder' alignment='center' icon='bi-chevron-left'>Quay lại</Button>
    </form>
  )
}

export default ForgotPasswordForm