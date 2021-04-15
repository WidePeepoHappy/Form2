<template>
  <div class="form-container">
    <h1>Форма регистрации</h1>
    <form @submit.prevent="">
      <fieldset>
        <legend>Персональная информация</legend>
        <div class="input-fields">
          <div class="input-fields-item">
            <label for="first-name">Имя<span class="required">*</span></label>
            <input
              @blur="v$.firstName.$touch"
              v-model.trim="firstName"
              type="text"
              name="first-name"
              id="first-name"
            />
            <span class="error" v-if="v$.firstName.$error"
              >Введите ваше имя</span
            >
          </div>
          <div class="input-fields-item">
            <label for="last-name"
              >Фамилия<span class="required">*</span></label
            >
            <input
              @blur="v$.lastName.$touch"
              v-model.trim="lastName"
              type="text"
              name="last-name"
              id="last-name"
            />
            <span class="error" v-if="v$.lastName.$error"
              >Введите вашу фамилию</span
            >
          </div>
        </div>
        <div class="input-fields">
          <div class="input-fields-item">
            <label for="patronymic">Отчество</label>
            <input type="text" name="patronymic" id="patronymic" />
          </div>
          <div class="input-fields-item">
            <label for="dob"
              >День рождения<span class="required">*</span></label
            >
            <input
              @blur="v$.dob.$touch"
              v-model="dob"
              type="date"
              name="dob"
              id="dob"
              min="1900-01-01"
              :max="currentDate"
            />
            <span class="error" v-if="v$.dob.$error"
              >Введите ваш день рождения</span
            >
          </div>
        </div>
        <div class="input-fields">
          <div class="input-fields-item">
            <label for="gender">Пол</label>
            <select class="select" name="gender" id="gender">
              <option value="">Выбрать</option>
              <option value="male">Мужской</option>
              <option value="female">Женский</option>
            </select>
          </div>
          <div class="input-fields-item">
            <label for="phone">Телефон<span class="required">*</span></label>
            <input
              v-model="phone"
              @blur="v$.phone.$touch"
              placeholder="7"
              type="tel"
              name="phone"
              id="phone"
            />
            <span v-if="v$.phone.$error && phone === ''" class="error"
              >Введите ваш телефон</span
            >
            <span v-if="v$.phone.$error && phone != ''" class="error"
              >Номер дожен начинаться с 7</span
            >
          </div>
        </div>
        <div class="input-fields">
          <div class="input-fields-item">
            <label for="client-group"
              >Группа клиентов<span class="required">*</span></label
            >
            <select
              @blur="v$.clientGroup.$touch"
              v-model="clientGroup"
              class="multi-select"
              name="client-group"
              id="client-group"
              multiple
            >
              <option value="vip">VIP</option>
              <option value="problematic">Проблемные</option>
              <option value="oms">ОМС</option>
            </select>
            <span v-if="v$.clientGroup.$error" class="error"
              >Выберите групы клиентов</span
            >
          </div>
          <div class="input-fields-item">
            <label for="doc">Врач</label>
            <select name="doc" id="doc">
              <option value="">Выбрать</option>
              <option value="ivanov">Иванов</option>
              <option value="zaharov">Захаров</option>
              <option value="chernisheva">Чернышева</option>
            </select>
            <div class="sms">
              <label for="sms"
                ><input id="sms" type="checkbox" /><span
                  class="checkmark"
                ></span
                >Не отправлять СМС</label
              >
            </div>
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend>Адрес</legend>
        <div class="input-fields">
          <div class="input-fields-item">
            <label for="contry">Страна</label>
            <input type="text" name="contry" id="contry" />
          </div>
          <div class="input-fields-item">
            <label for="oblast">Область</label>
            <input type="text" name="oblast" id="oblast" />
          </div>
        </div>
        <div class="input-fields">
          <div class="input-fields-item">
            <label for="city">Город<span class="required">*</span></label>
            <input
              @blur="v$.city.$touch"
              v-model.trim="city"
              type="text"
              name="city"
              id="city"
            />
            <span v-if="v$.city.$error" class="error"
              >Введите город проживания</span
            >
          </div>
          <div class="input-fields-item">
            <label for="street">Улица</label>
            <input type="text" name="street" id="street" />
          </div>
        </div>
        <div class="input-fields">
          <div class="input-fields-item">
            <label for="house">Дом</label>
            <input type="text" name="house" id="house" />
          </div>
          <div class="input-fields-item">
            <label for="postal">Почтовый индекс</label>
            <input type="text" name="postal" id="postal" />
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend>Документ</legend>
        <div class="input-fields">
          <div class="input-fields-item">
            <label for="document"
              >Тип документа<span class="required">*</span></label
            >
            <select
              @blur="v$.document.$touch"
              v-model="document"
              class="select"
              name="document"
              id="document"
            >
              <option value="">Выбрать</option>
              <option value="pasport">Паспорт</option>
              <option value="birthSert">Свид. о рождении</option>
              <option value="driverLicense">Вод. удостоверение</option>
            </select>
            <span v-if="v$.document.$error" class="error"
              >Выберите тип документа</span
            >
          </div>
          <div class="input-fields-item">
            <label for="serial-numb">Номер</label>
            <input type="text" name="serial-numb" id="serial-numb" />
          </div>
        </div>
        <div class="input-fields">
          <div class="input-fields-item">
            <label for="serial">Серия</label>
            <input type="text" name="serial" id="serial" />
          </div>

          <div class="input-fields-item">
            <label for="issue"
              >Дата выдачи<span class="required">*</span></label
            >
            <input
              @blur="v$.dateOfIssue.$touch"
              v-model="dateOfIssue"
              type="date"
              name="issue"
              id="issue"
              min="1900-01-01"
              :max="currentDate"
            />
            <span v-if="v$.dateOfIssue.$error" class="error"
              >Введите дату выдачи</span
            >
          </div>
        </div>
        <div class="input-fields">
          <div class="input-fields-textarea">
            <label for="by-whom">Кем выдан</label>
            <textarea id="by-whom" class="textarea"></textarea>
          </div>
        </div>
      </fieldset>
      <div
        v-if="formComplete && v$.$errors.length === 0"
        class="new-client-complete"
      >
        <span class="new-client-complete-text"
          >Новый клиент успешно создан</span
        >
      </div>
      <div
        v-if="v$.$anyDirty && v$.$errors.length > 0"
        class="new-client-error"
      >
        <span class="new-client-error-text"
          >Заполните все обязательные поля</span
        >
      </div>

      <button @click="submitForm" class="btn">Зарегистрироваться</button>
    </form>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  computed: {
    currentDate() {
      return new Date().toISOString().split("T")[0];
    },
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      dob: "",
      phone: "",
      clientGroup: [],
      city: "",
      document: "",
      dateOfIssue: "",
      formComplete: false,
    };
  },
  validations() {
    return {
      firstName: {
        required,
        checkFirstName(firstName) {
          return this.stringTest(firstName);
        },
      },
      lastName: {
        required,
        checklastName(lastName) {
          return this.stringTest(lastName);
        },
      },
      dob: {
        required,
      },
      phone: {
        required,
        checkPhoneNum(phone) {
          const regex = /7{1}[0-9]{10}/;
          return regex.test(phone);
        },
      },
      clientGroup: {
        required,
      },
      city: {
        required,
        checkCity(city) {
          return this.stringTest(city);
        },
      },
      document: {
        required,
      },
      dateOfIssue: {
        required,
      },
    };
  },
  methods: {
    stringTest(string) {
      const regex = /^[a-zA-ZА-Яа-я\s-]+$/;
      return regex.test(string);
    },
    submitForm() {
      this.v$.$touch();
      console.log(this.v$);
      if (this.v$.$error) {
        return;
      } else {
        this.formComplete = true;
        // обработка формы
      }
    },
  },
};
</script>

<style lang="scss">
@import url("http://fonts.googleapis.com/css?family=Bitter:400,500,600,700");
@import "./assets/_variables.scss";
* {
  box-sizing: border-box;
  font-family: "Bitter", sans-serif;
}
.form-container {
  @include box-shadow(0 2px 10px rgba(0, 0, 0, 0.33));
  @extend %default-border;
  max-width: 800px;
  margin: 0 auto;
  h1 {
    background-color: color(primary);
    padding: 25px;
    margin: 0;
    color: color(on-primary);
  }

  fieldset {
    @include box-shadow(0 2px 10px rgba(0, 0, 0, 0.33));
    @extend %default-border;
    background-color: #f8f8f8;
    margin: 20px;
    padding: 10px;
    legend {
      @include font(large, primary, bold);
      @extend %default-border;
      padding: 5px 10px;
      background-color: color(on-primary);
    }
  }
  .new-client-complete {
    @extend fieldset;
    text-align: center;
    border-color: color(complete);
    &-text {
      @include font(medium, complete, thin);
    }
  }
  .new-client-error {
    @extend .new-client-complete;
    border-color: color(error);
    &-text {
      @include font(medium, error, thin);
    }
  }
  .btn {
    @include box-shadow(0 2px 10px rgba(0, 0, 0, 0.33));
    @include width(100%);
    @include font(large, on-primary, thin);
    display: block;
    padding: 10px 20px;
    background-color: color(primary);
    cursor: pointer;
    outline: none;
    border: none;
    &:hover {
      opacity: 0.9;
    }
  }
}
.input-fields {
  display: flex;
  justify-content: space-around;

  @include mobile {
    flex-direction: column;
  }
  &-item {
    @include width(45%);
    display: inherit;
    flex-direction: column;
    margin: 5px 0;

    @include mobile {
      @include width(auto);
    }

    label {
      @include font(medium, primary, thin);
      margin-bottom: 5px;

      .required {
        @extend label;
        color: color(error);
      }
    }

    input,
    select,
    textarea {
      @include font(small, primary);
      @include box-shadow(inset 2px 2px 2px rgba(0, 0, 0, 0.33));
      outline: none;
      border: none;
      padding: 8px 10px;
    }
    .multi-select {
      overflow-y: auto;
      height: 80px;
    }

    .error {
      @include font(error, on-primary);
      background-color: color(error);
      display: block;
      padding: 3px;
      text-align: center;
    }
    .sms {
      position: relative;
      margin-top: 25px;

      label {
        cursor: pointer;

        input {
          @include checkmark(0, 0);
          opacity: 0;
          &:checked ~ .checkmark {
            background-color: color(primary);
          }
          &:checked ~ .checkmark::after {
            display: block;
          }
        }
        .checkmark {
          @include checkmark(14px, 14px, 4px, 180px);
          @include box-shadow(inset 2px 2px 2px rgba(0, 0, 0, 0.33));
          cursor: pointer;

          &::after {
            @include checkmark(8px, 3px, 0, 5px);
            content: "";
            display: none;
            border: solid color(on-primary);
            border-width: 0 2.5px 2.5px 0;
            transform: rotate(45deg);
          }
        }
        &:hover,
        .checkmark:hover {
          .checkmark {
            background-color: #eee;
          }
        }
      }
    }
  }
  &-textarea {
    @extend.input-fields-item;
    @include width(100%);
    margin: 0 2.5%;
    @include mobile {
      margin: 0 1%;
    }
    textarea {
      height: 100px;
      resize: none;
    }
  }
}
</style>
