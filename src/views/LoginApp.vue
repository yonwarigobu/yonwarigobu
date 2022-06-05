<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h2>ログイン画面</h2>
        <div class="mt-2">
          <b-form-input
            v-model="email"
            type="text"
            placeholder="メールアドレス"
          />
        </div>
        <div class="mt-2">
          <b-form-input
            v-model="password"
            type="text"
            placeholder="パスワード"
          />
        </div>
        <div class="mt-2">
          <b-button block variant="primary" @click="emailLogin"
            >ログイン</b-button
          >
        </div>
        <div class="mt-2">
          <b-button block variant="primary" @click="googleLogin"
            >Google ログイン</b-button
          >
        </div>
        <div class="mt-2">
          <b-alert v-model="showError" dismissible variant="danger">{{
            errorMessage
          }}</b-alert>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GoogleAuthProvider } from "firebase/auth"
const provider = new GoogleAuthProvider()
provider.addScope("https://www.googleapis.com/auth/contacts.readonly")
</script>
