import { ApiAuth } from '@/sdk/core';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AppBarComponent extends Vue {
    User = new ApiAuth().SessionValue?.User;
}
