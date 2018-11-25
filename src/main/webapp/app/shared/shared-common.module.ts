import { NgModule } from '@angular/core';

import { TestOracleSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [TestOracleSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [TestOracleSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TestOracleSharedCommonModule {}
