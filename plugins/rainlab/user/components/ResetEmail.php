<?php namespace RainLab\User\Components;
use Cms\Classes\ComponentBase;
use RainLab\User\Models\User;
use RainLab\User\Components\Authentication\ActionRecoverPassword;
use Cms;
use Flash;
use NotFoundException;
use Redirect;

class ResetEmail extends ComponentBase{
    use ActionRecoverPassword;
    public function componentDetails()
    {
        return [
            'name' => 'Reset Email Form',
            'description' => 'Displays a form to send a password reset email.'
        ];
    }
    public function defineProperties()
    {
        return [
            'recoverPassword' => [
                'title' => "Password Recovery",
                'description' => "Check this box to allow users to reset their own passwords.",
                'type' => 'checkbox',
                'default' => true
                ],
            ];
    }
    public function onRecoverPassword()
    {
        if (!$this->usePasswordRecovery()) {
            throw new NotFoundException;
        }

        if ($response = $this->actionRecoverPassword()) {
            return $response;
        }

         Flash::success('Please check your email. We have sent instructions to reset your password.');

        if ($redirect = Cms::redirectFromPost()) {
            return $redirect;
        }
    }
      public function usePasswordRecovery(): bool
    {
        return (bool) $this->property('recoverPassword', true);
    }

}

?>
