/* */ 
'use strict';(function (LifecycleHooks) {
    LifecycleHooks[LifecycleHooks["OnInit"] = 0] = "OnInit";
    LifecycleHooks[LifecycleHooks["OnDestroy"] = 1] = "OnDestroy";
    LifecycleHooks[LifecycleHooks["DoCheck"] = 2] = "DoCheck";
    LifecycleHooks[LifecycleHooks["OnChanges"] = 3] = "OnChanges";
    LifecycleHooks[LifecycleHooks["AfterContentInit"] = 4] = "AfterContentInit";
    LifecycleHooks[LifecycleHooks["AfterContentChecked"] = 5] = "AfterContentChecked";
    LifecycleHooks[LifecycleHooks["AfterViewInit"] = 6] = "AfterViewInit";
    LifecycleHooks[LifecycleHooks["AfterViewChecked"] = 7] = "AfterViewChecked";
})(exports.LifecycleHooks || (exports.LifecycleHooks = {}));
var LifecycleHooks = exports.LifecycleHooks;
/**
 * @internal
 */
exports.LIFECYCLE_HOOKS_VALUES = [
    LifecycleHooks.OnInit,
    LifecycleHooks.OnDestroy,
    LifecycleHooks.DoCheck,
    LifecycleHooks.OnChanges,
    LifecycleHooks.AfterContentInit,
    LifecycleHooks.AfterContentChecked,
    LifecycleHooks.AfterViewInit,
    LifecycleHooks.AfterViewChecked
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9jb3JlL2xpbmtlci9pbnRlcmZhY2VzLnRzIl0sIm5hbWVzIjpbIkxpZmVjeWNsZUhvb2tzIl0sIm1hcHBpbmdzIjoiQUFHQSxXQUFZLGNBQWM7SUFDeEJBLHVEQUFNQSxDQUFBQTtJQUNOQSw2REFBU0EsQ0FBQUE7SUFDVEEseURBQU9BLENBQUFBO0lBQ1BBLDZEQUFTQSxDQUFBQTtJQUNUQSwyRUFBZ0JBLENBQUFBO0lBQ2hCQSxpRkFBbUJBLENBQUFBO0lBQ25CQSxxRUFBYUEsQ0FBQUE7SUFDYkEsMkVBQWdCQSxDQUFBQTtBQUNsQkEsQ0FBQ0EsRUFUVyxzQkFBYyxLQUFkLHNCQUFjLFFBU3pCO0FBVEQsSUFBWSxjQUFjLEdBQWQsc0JBU1gsQ0FBQTtBQUVEOztHQUVHO0FBQ1EsOEJBQXNCLEdBQUc7SUFDbEMsY0FBYyxDQUFDLE1BQU07SUFDckIsY0FBYyxDQUFDLFNBQVM7SUFDeEIsY0FBYyxDQUFDLE9BQU87SUFDdEIsY0FBYyxDQUFDLFNBQVM7SUFDeEIsY0FBYyxDQUFDLGdCQUFnQjtJQUMvQixjQUFjLENBQUMsbUJBQW1CO0lBQ2xDLGNBQWMsQ0FBQyxhQUFhO0lBQzVCLGNBQWMsQ0FBQyxnQkFBZ0I7Q0FDaEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TWFwV3JhcHBlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9jb2xsZWN0aW9uJztcbmltcG9ydCB7U2ltcGxlQ2hhbmdlfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9jaGFuZ2VfZGV0ZWN0aW9uL2NoYW5nZV9kZXRlY3Rpb25fdXRpbCc7XG5cbmV4cG9ydCBlbnVtIExpZmVjeWNsZUhvb2tzIHtcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIERvQ2hlY2ssXG4gIE9uQ2hhbmdlcyxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQWZ0ZXJDb250ZW50Q2hlY2tlZCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQWZ0ZXJWaWV3Q2hlY2tlZFxufVxuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgdmFyIExJRkVDWUNMRV9IT09LU19WQUxVRVMgPSBbXG4gIExpZmVjeWNsZUhvb2tzLk9uSW5pdCxcbiAgTGlmZWN5Y2xlSG9va3MuT25EZXN0cm95LFxuICBMaWZlY3ljbGVIb29rcy5Eb0NoZWNrLFxuICBMaWZlY3ljbGVIb29rcy5PbkNoYW5nZXMsXG4gIExpZmVjeWNsZUhvb2tzLkFmdGVyQ29udGVudEluaXQsXG4gIExpZmVjeWNsZUhvb2tzLkFmdGVyQ29udGVudENoZWNrZWQsXG4gIExpZmVjeWNsZUhvb2tzLkFmdGVyVmlld0luaXQsXG4gIExpZmVjeWNsZUhvb2tzLkFmdGVyVmlld0NoZWNrZWRcbl07XG5cbi8qKlxuICogTGlmZWN5Y2xlIGhvb2tzIGFyZSBndWFyYW50ZWVkIHRvIGJlIGNhbGxlZCBpbiB0aGUgZm9sbG93aW5nIG9yZGVyOlxuICogLSBgT25DaGFuZ2VzYCAoaWYgYW55IGJpbmRpbmdzIGhhdmUgY2hhbmdlZCksXG4gKiAtIGBPbkluaXRgIChhZnRlciB0aGUgZmlyc3QgY2hlY2sgb25seSksXG4gKiAtIGBEb0NoZWNrYCxcbiAqIC0gYEFmdGVyQ29udGVudEluaXRgLFxuICogLSBgQWZ0ZXJDb250ZW50Q2hlY2tlZGAsXG4gKiAtIGBBZnRlclZpZXdJbml0YCxcbiAqIC0gYEFmdGVyVmlld0NoZWNrZWRgLFxuICogLSBgT25EZXN0cm95YCAoYXQgdGhlIHZlcnkgZW5kIGJlZm9yZSBkZXN0cnVjdGlvbilcbiAqL1xuXG4vKipcbiAqIEltcGxlbWVudCB0aGlzIGludGVyZmFjZSB0byBnZXQgbm90aWZpZWQgd2hlbiBhbnkgZGF0YS1ib3VuZCBwcm9wZXJ0eSBvZiB5b3VyIGRpcmVjdGl2ZSBjaGFuZ2VzLlxuICpcbiAqIGBuZ09uQ2hhbmdlc2AgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIHRoZSBkYXRhLWJvdW5kIHByb3BlcnRpZXMgaGF2ZSBiZWVuIGNoZWNrZWQgYW5kIGJlZm9yZSB2aWV3XG4gKiBhbmQgY29udGVudCBjaGlsZHJlbiBhcmUgY2hlY2tlZCBpZiBhdCBsZWFzdCBvbmUgb2YgdGhlbSBoYXMgY2hhbmdlZC5cbiAqXG4gKiBUaGUgYGNoYW5nZXNgIHBhcmFtZXRlciBjb250YWlucyBhbiBlbnRyeSBmb3IgZWFjaCBvZiB0aGUgY2hhbmdlZCBkYXRhLWJvdW5kIHByb3BlcnR5LiBUaGUga2V5IGlzXG4gKiB0aGUgcHJvcGVydHkgbmFtZSBhbmQgdGhlIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIHtAbGluayBTaW1wbGVDaGFuZ2V9LlxuICpcbiAqICMjIyBFeGFtcGxlIChbbGl2ZSBleGFtcGxlXShodHRwOi8vcGxua3IuY28vZWRpdC9BSHJCNm9wTHFIREJQa3Q0S3BkVD9wPXByZXZpZXcpKTpcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBAQ29tcG9uZW50KHtcbiAqICAgc2VsZWN0b3I6ICdteS1jbXAnLFxuICogICB0ZW1wbGF0ZTogYDxwPm15UHJvcCA9IHt7bXlQcm9wfX08L3A+YFxuICogfSlcbiAqIGNsYXNzIE15Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAqICAgQElucHV0KCkgbXlQcm9wOiBhbnk7XG4gKlxuICogICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7W3Byb3BOYW1lOiBzdHJpbmddOiBTaW1wbGVDaGFuZ2V9KSB7XG4gKiAgICAgY29uc29sZS5sb2coJ25nT25DaGFuZ2VzIC0gbXlQcm9wID0gJyArIGNoYW5nZXNbJ215UHJvcCddLmN1cnJlbnRWYWx1ZSk7XG4gKiAgIH1cbiAqIH1cbiAqXG4gKiBAQ29tcG9uZW50KHtcbiAqICAgc2VsZWN0b3I6ICdhcHAnLFxuICogICB0ZW1wbGF0ZTogYFxuICogICAgIDxidXR0b24gKGNsaWNrKT1cInZhbHVlID0gdmFsdWUgKyAxXCI+Q2hhbmdlIE15Q29tcG9uZW50PC9idXR0b24+XG4gKiAgICAgPG15LWNtcCBbbXktcHJvcF09XCJ2YWx1ZVwiPjwvbXktY21wPmAsXG4gKiAgIGRpcmVjdGl2ZXM6IFtNeUNvbXBvbmVudF1cbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgQXBwIHtcbiAqICAgdmFsdWUgPSAwO1xuICogfVxuICpcbiAqIGJvb3RzdHJhcChBcHApLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICogYGBgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgT25DaGFuZ2VzIHsgbmdPbkNoYW5nZXMoY2hhbmdlczoge1trZXk6IHN0cmluZ106IFNpbXBsZUNoYW5nZX0pOyB9XG5cbi8qKlxuICogSW1wbGVtZW50IHRoaXMgaW50ZXJmYWNlIHRvIGV4ZWN1dGUgY3VzdG9tIGluaXRpYWxpemF0aW9uIGxvZ2ljIGFmdGVyIHlvdXIgZGlyZWN0aXZlJ3NcbiAqIGRhdGEtYm91bmQgcHJvcGVydGllcyBoYXZlIGJlZW4gaW5pdGlhbGl6ZWQuXG4gKlxuICogYG5nT25Jbml0YCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlIGRpcmVjdGl2ZSdzIGRhdGEtYm91bmQgcHJvcGVydGllcyBoYXZlIGJlZW4gY2hlY2tlZCBmb3IgdGhlXG4gKiBmaXJzdCB0aW1lLCBhbmQgYmVmb3JlIGFueSBvZiBpdHMgY2hpbGRyZW4gaGF2ZSBiZWVuIGNoZWNrZWQuIEl0IGlzIGludm9rZWQgb25seSBvbmNlIHdoZW4gdGhlXG4gKiBkaXJlY3RpdmUgaXMgaW5zdGFudGlhdGVkLlxuICpcbiAqICMjIyBFeGFtcGxlIChbbGl2ZSBleGFtcGxlXShodHRwOi8vcGxua3IuY28vZWRpdC8xTUJ5cFJyeVhkNjR2NHBWMDNZbj9wPXByZXZpZXcpKVxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIEBDb21wb25lbnQoe1xuICogICBzZWxlY3RvcjogJ215LWNtcCcsXG4gKiAgIHRlbXBsYXRlOiBgPHA+bXktY29tcG9uZW50PC9wPmBcbiAqIH0pXG4gKiBjbGFzcyBNeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAqICAgbmdPbkluaXQoKSB7XG4gKiAgICAgY29uc29sZS5sb2coJ25nT25Jbml0Jyk7XG4gKiAgIH1cbiAqXG4gKiAgIG5nT25EZXN0cm95KCkge1xuICogICAgIGNvbnNvbGUubG9nKCduZ09uRGVzdHJveScpO1xuICogICB9XG4gKiB9XG4gKlxuICogQENvbXBvbmVudCh7XG4gKiAgIHNlbGVjdG9yOiAnYXBwJyxcbiAqICAgdGVtcGxhdGU6IGBcbiAqICAgICA8YnV0dG9uIChjbGljayk9XCJoYXNDaGlsZCA9ICFoYXNDaGlsZFwiPlxuICogICAgICAge3toYXNDaGlsZCA/ICdEZXN0cm95JyA6ICdDcmVhdGUnfX0gTXlDb21wb25lbnRcbiAqICAgICA8L2J1dHRvbj5cbiAqICAgICA8bXktY21wICpuZ0lmPVwiaGFzQ2hpbGRcIj48L215LWNtcD5gLFxuICogICBkaXJlY3RpdmVzOiBbTXlDb21wb25lbnQsIE5nSWZdXG4gKiB9KVxuICogZXhwb3J0IGNsYXNzIEFwcCB7XG4gKiAgIGhhc0NoaWxkID0gdHJ1ZTtcbiAqIH1cbiAqXG4gKiBib290c3RyYXAoQXBwKS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAqICBgYGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBPbkluaXQgeyBuZ09uSW5pdCgpOyB9XG5cbi8qKlxuICogSW1wbGVtZW50IHRoaXMgaW50ZXJmYWNlIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IGNoYW5nZSBkZXRlY3Rpb24gYWxnb3JpdGhtIGZvciB5b3VyIGRpcmVjdGl2ZS5cbiAqXG4gKiBgbmdEb0NoZWNrYCBnZXRzIGNhbGxlZCB0byBjaGVjayB0aGUgY2hhbmdlcyBpbiB0aGUgZGlyZWN0aXZlcyBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IGFsZ29yaXRobS5cbiAqXG4gKiBUaGUgZGVmYXVsdCBjaGFuZ2UgZGV0ZWN0aW9uIGFsZ29yaXRobSBsb29rcyBmb3IgZGlmZmVyZW5jZXMgYnkgY29tcGFyaW5nIGJvdW5kLXByb3BlcnR5IHZhbHVlc1xuICogYnkgcmVmZXJlbmNlIGFjcm9zcyBjaGFuZ2UgZGV0ZWN0aW9uIHJ1bnMuIFdoZW4gYERvQ2hlY2tgIGlzIGltcGxlbWVudGVkLCB0aGUgZGVmYXVsdCBhbGdvcml0aG1cbiAqIGlzIGRpc2FibGVkIGFuZCBgbmdEb0NoZWNrYCBpcyByZXNwb25zaWJsZSBmb3IgY2hlY2tpbmcgZm9yIGNoYW5nZXMuXG4gKlxuICogSW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFsbG93cyBpbXByb3ZpbmcgcGVyZm9ybWFuY2UgYnkgdXNpbmcgaW5zaWdodHMgYWJvdXQgdGhlIGNvbXBvbmVudCxcbiAqIGl0cyBpbXBsZW1lbnRhdGlvbiBhbmQgZGF0YSB0eXBlcyBvZiBpdHMgcHJvcGVydGllcy5cbiAqXG4gKiBOb3RlIHRoYXQgYSBkaXJlY3RpdmUgc2hvdWxkIG5vdCBpbXBsZW1lbnQgYm90aCBgRG9DaGVja2AgYW5kIHtAbGluayBPbkNoYW5nZXN9IGF0IHRoZSBzYW1lIHRpbWUuXG4gKiBgbmdPbkNoYW5nZXNgIHdvdWxkIG5vdCBiZSBjYWxsZWQgd2hlbiBhIGRpcmVjdGl2ZSBpbXBsZW1lbnRzIGBEb0NoZWNrYC4gUmVhY3Rpb24gdG8gdGhlIGNoYW5nZXNcbiAqIGhhdmUgdG8gYmUgaGFuZGxlZCBmcm9tIHdpdGhpbiB0aGUgYG5nRG9DaGVja2AgY2FsbGJhY2suXG4gKlxuICogVXNlIHtAbGluayBLZXlWYWx1ZURpZmZlcnN9IGFuZCB7QGxpbmsgSXRlcmFibGVEaWZmZXJzfSB0byBhZGQgeW91ciBjdXN0b20gY2hlY2sgbWVjaGFuaXNtcy5cbiAqXG4gKiAjIyMgRXhhbXBsZSAoW2xpdmUgZGVtb10oaHR0cDovL3BsbmtyLmNvL2VkaXQvUXBuSWxGMENSMmk1YmNZYkhFVUo/cD1wcmV2aWV3KSlcbiAqXG4gKiBJbiB0aGUgZm9sbG93aW5nIGV4YW1wbGUgYG5nRG9DaGVja2AgdXNlcyBhbiB7QGxpbmsgSXRlcmFibGVEaWZmZXJzfSB0byBkZXRlY3QgdGhlIHVwZGF0ZXMgdG8gdGhlXG4gKiBhcnJheSBgbGlzdGA6XG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogQENvbXBvbmVudCh7XG4gKiAgIHNlbGVjdG9yOiAnY3VzdG9tLWNoZWNrJyxcbiAqICAgdGVtcGxhdGU6IGBcbiAqICAgICA8cD5DaGFuZ2VzOjwvcD5cbiAqICAgICA8dWw+XG4gKiAgICAgICA8bGkgKm5nRm9yPVwiI2xpbmUgb2YgbG9nc1wiPnt7bGluZX19PC9saT5cbiAqICAgICA8L3VsPmAsXG4gKiAgIGRpcmVjdGl2ZXM6IFtOZ0Zvcl1cbiAqIH0pXG4gKiBjbGFzcyBDdXN0b21DaGVja0NvbXBvbmVudCBpbXBsZW1lbnRzIERvQ2hlY2sge1xuICogICBASW5wdXQoKSBsaXN0OiBhbnlbXTtcbiAqICAgZGlmZmVyOiBhbnk7XG4gKiAgIGxvZ3MgPSBbXTtcbiAqXG4gKiAgIGNvbnN0cnVjdG9yKGRpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycykge1xuICogICAgIHRoaXMuZGlmZmVyID0gZGlmZmVycy5maW5kKFtdKS5jcmVhdGUobnVsbCk7XG4gKiAgIH1cbiAqXG4gKiAgIG5nRG9DaGVjaygpIHtcbiAqICAgICB2YXIgY2hhbmdlcyA9IHRoaXMuZGlmZmVyLmRpZmYodGhpcy5saXN0KTtcbiAqXG4gKiAgICAgaWYgKGNoYW5nZXMpIHtcbiAqICAgICAgIGNoYW5nZXMuZm9yRWFjaEFkZGVkSXRlbShyID0+IHRoaXMubG9ncy5wdXNoKCdhZGRlZCAnICsgci5pdGVtKSk7XG4gKiAgICAgICBjaGFuZ2VzLmZvckVhY2hSZW1vdmVkSXRlbShyID0+IHRoaXMubG9ncy5wdXNoKCdyZW1vdmVkICcgKyByLml0ZW0pKVxuICogICAgIH1cbiAqICAgfVxuICogfVxuICpcbiAqIEBDb21wb25lbnQoe1xuICogICBzZWxlY3RvcjogJ2FwcCcsXG4gKiAgIHRlbXBsYXRlOiBgXG4gKiAgICAgPGJ1dHRvbiAoY2xpY2spPVwibGlzdC5wdXNoKGxpc3QubGVuZ3RoKVwiPlB1c2g8L2J1dHRvbj5cbiAqICAgICA8YnV0dG9uIChjbGljayk9XCJsaXN0LnBvcCgpXCI+UG9wPC9idXR0b24+XG4gKiAgICAgPGN1c3RvbS1jaGVjayBbbGlzdF09XCJsaXN0XCI+PC9jdXN0b20tY2hlY2s+YCxcbiAqICAgZGlyZWN0aXZlczogW0N1c3RvbUNoZWNrQ29tcG9uZW50XVxuICogfSlcbiAqIGV4cG9ydCBjbGFzcyBBcHAge1xuICogICBsaXN0ID0gW107XG4gKiB9XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEb0NoZWNrIHsgbmdEb0NoZWNrKCk7IH1cblxuLyoqXG4gKiBJbXBsZW1lbnQgdGhpcyBpbnRlcmZhY2UgdG8gZ2V0IG5vdGlmaWVkIHdoZW4geW91ciBkaXJlY3RpdmUgaXMgZGVzdHJveWVkLlxuICpcbiAqIGBuZ09uRGVzdHJveWAgY2FsbGJhY2sgaXMgdHlwaWNhbGx5IHVzZWQgZm9yIGFueSBjdXN0b20gY2xlYW51cCB0aGF0IG5lZWRzIHRvIG9jY3VyIHdoZW4gdGhlXG4gKiBpbnN0YW5jZSBpcyBkZXN0cm95ZWRcbiAqXG4gKiAjIyMgRXhhbXBsZSAoW2xpdmUgZXhhbXBsZV0oaHR0cDovL3BsbmtyLmNvL2VkaXQvMU1CeXBScnlYZDY0djRwVjAzWW4/cD1wcmV2aWV3KSlcbiAqXG4gKiBgYGB0eXBlc3JpcHRcbiAqIEBDb21wb25lbnQoe1xuICogICBzZWxlY3RvcjogJ215LWNtcCcsXG4gKiAgIHRlbXBsYXRlOiBgPHA+bXktY29tcG9uZW50PC9wPmBcbiAqIH0pXG4gKiBjbGFzcyBNeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAqICAgbmdPbkluaXQoKSB7XG4gKiAgICAgY29uc29sZS5sb2coJ25nT25Jbml0Jyk7XG4gKiAgIH1cbiAqXG4gKiAgIG5nT25EZXN0cm95KCkge1xuICogICAgIGNvbnNvbGUubG9nKCduZ09uRGVzdHJveScpO1xuICogICB9XG4gKiB9XG4gKlxuICogQENvbXBvbmVudCh7XG4gKiAgIHNlbGVjdG9yOiAnYXBwJyxcbiAqICAgdGVtcGxhdGU6IGBcbiAqICAgICA8YnV0dG9uIChjbGljayk9XCJoYXNDaGlsZCA9ICFoYXNDaGlsZFwiPlxuICogICAgICAge3toYXNDaGlsZCA/ICdEZXN0cm95JyA6ICdDcmVhdGUnfX0gTXlDb21wb25lbnRcbiAqICAgICA8L2J1dHRvbj5cbiAqICAgICA8bXktY21wICpuZ0lmPVwiaGFzQ2hpbGRcIj48L215LWNtcD5gLFxuICogICBkaXJlY3RpdmVzOiBbTXlDb21wb25lbnQsIE5nSWZdXG4gKiB9KVxuICogZXhwb3J0IGNsYXNzIEFwcCB7XG4gKiAgIGhhc0NoaWxkID0gdHJ1ZTtcbiAqIH1cbiAqXG4gKiBib290c3RyYXAoQXBwKS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAqIGBgYFxuICpcbiAqXG4gKiBUbyBjcmVhdGUgYSBzdGF0ZWZ1bCBQaXBlLCB5b3Ugc2hvdWxkIGltcGxlbWVudCB0aGlzIGludGVyZmFjZSBhbmQgc2V0IHRoZSBgcHVyZWBcbiAqIHBhcmFtZXRlciB0byBgZmFsc2VgIGluIHRoZSB7QGxpbmsgUGlwZU1ldGFkYXRhfS5cbiAqXG4gKiBBIHN0YXRlZnVsIHBpcGUgbWF5IHByb2R1Y2UgZGlmZmVyZW50IG91dHB1dCwgZ2l2ZW4gdGhlIHNhbWUgaW5wdXQuIEl0IGlzXG4gKiBsaWtlbHkgdGhhdCBhIHN0YXRlZnVsIHBpcGUgbWF5IGNvbnRhaW4gc3RhdGUgdGhhdCBzaG91bGQgYmUgY2xlYW5lZCB1cCB3aGVuXG4gKiBhIGJpbmRpbmcgaXMgZGVzdHJveWVkLiBGb3IgZXhhbXBsZSwgYSBzdWJzY3JpcHRpb24gdG8gYSBzdHJlYW0gb2YgZGF0YSBtYXkgbmVlZCB0b1xuICogYmUgZGlzcG9zZWQsIG9yIGFuIGludGVydmFsIG1heSBuZWVkIHRvIGJlIGNsZWFyZWQuXG4gKlxuICogIyMjIEV4YW1wbGUgKFtsaXZlIGRlbW9dKGh0dHA6Ly9wbG5rci5jby9lZGl0L2k4cG01YnJPNHNQYUx4Qng1Nk1SP3A9cHJldmlldykpXG4gKlxuICogSW4gdGhpcyBleGFtcGxlLCBhIHBpcGUgaXMgY3JlYXRlZCB0byBjb3VudGRvd24gaXRzIGlucHV0IHZhbHVlLCB1cGRhdGluZyBpdCBldmVyeVxuICogNTBtcy4gQmVjYXVzZSBpdCBtYWludGFpbnMgYW4gaW50ZXJuYWwgaW50ZXJ2YWwsIGl0IGF1dG9tYXRpY2FsbHkgY2xlYXJzXG4gKiB0aGUgaW50ZXJ2YWwgd2hlbiB0aGUgYmluZGluZyBpcyBkZXN0cm95ZWQgb3IgdGhlIGNvdW50ZG93biBjb21wbGV0ZXMuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQge09uRGVzdHJveSwgUGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSAnYW5ndWxhcjIvY29yZSdcbiAqIEBQaXBlKHtuYW1lOiAnY291bnRkb3duJywgcHVyZTogZmFsc2V9KVxuICogY2xhc3MgQ291bnREb3duIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSwgT25EZXN0cm95IHtcbiAqICAgcmVtYWluaW5nVGltZTpOdW1iZXI7XG4gKiAgIGludGVydmFsOlNldEludGVydmFsO1xuICogICBuZ09uRGVzdHJveSgpIHtcbiAqICAgICBpZiAodGhpcy5pbnRlcnZhbCkge1xuICogICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbiAqICAgICB9XG4gKiAgIH1cbiAqICAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGFyZ3M6IGFueVtdID0gW10pIHtcbiAqICAgICBpZiAoIXBhcnNlSW50KHZhbHVlLCAxMCkpIHJldHVybiBudWxsO1xuICogICAgIGlmICh0eXBlb2YgdGhpcy5yZW1haW5pbmdUaW1lICE9PSAnbnVtYmVyJykge1xuICogICAgICAgdGhpcy5yZW1haW5pbmdUaW1lID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAqICAgICB9XG4gKiAgICAgaWYgKCF0aGlzLmludGVydmFsKSB7XG4gKiAgICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICogICAgICAgICB0aGlzLnJlbWFpbmluZ1RpbWUtPTUwO1xuICogICAgICAgICBpZiAodGhpcy5yZW1haW5pbmdUaW1lIDw9IDApIHtcbiAqICAgICAgICAgICB0aGlzLnJlbWFpbmluZ1RpbWUgPSAwO1xuICogICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gKiAgICAgICAgICAgZGVsZXRlIHRoaXMuaW50ZXJ2YWw7XG4gKiAgICAgICAgIH1cbiAqICAgICAgIH0sIDUwKTtcbiAqICAgICB9XG4gKiAgICAgcmV0dXJuIHRoaXMucmVtYWluaW5nVGltZTtcbiAqICAgfVxuICogfVxuICogYGBgXG4gKlxuICogSW52b2tpbmcgYHt7IDEwMDAwIHwgY291bnRkb3duIH19YCB3b3VsZCBjYXVzZSB0aGUgdmFsdWUgdG8gYmUgZGVjcmVtZW50ZWQgYnkgNTAsXG4gKiBldmVyeSA1MG1zLCB1bnRpbCBpdCByZWFjaGVzIDAuXG4gKlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE9uRGVzdHJveSB7IG5nT25EZXN0cm95KCk7IH1cblxuLyoqXG4gKiBJbXBsZW1lbnQgdGhpcyBpbnRlcmZhY2UgdG8gZ2V0IG5vdGlmaWVkIHdoZW4geW91ciBkaXJlY3RpdmUncyBjb250ZW50IGhhcyBiZWVuIGZ1bGx5XG4gKiBpbml0aWFsaXplZC5cbiAqXG4gKiAjIyMgRXhhbXBsZSAoW2xpdmUgZGVtb10oaHR0cDovL3BsbmtyLmNvL2VkaXQvcGxhbVhVcHNMUWJJWHBWaVpoVU8/cD1wcmV2aWV3KSlcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBAQ29tcG9uZW50KHtcbiAqICAgc2VsZWN0b3I6ICdjaGlsZC1jbXAnLFxuICogICB0ZW1wbGF0ZTogYHt7d2hlcmV9fSBjaGlsZGBcbiAqIH0pXG4gKiBjbGFzcyBDaGlsZENvbXBvbmVudCB7XG4gKiAgIEBJbnB1dCgpIHdoZXJlOiBzdHJpbmc7XG4gKiB9XG4gKlxuICogQENvbXBvbmVudCh7XG4gKiAgIHNlbGVjdG9yOiAncGFyZW50LWNtcCcsXG4gKiAgIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmBcbiAqIH0pXG4gKiBjbGFzcyBQYXJlbnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAqICAgQENvbnRlbnRDaGlsZChDaGlsZENvbXBvbmVudCkgY29udGVudENoaWxkOiBDaGlsZENvbXBvbmVudDtcbiAqXG4gKiAgIGNvbnN0cnVjdG9yKCkge1xuICogICAgIC8vIGNvbnRlbnRDaGlsZCBpcyBub3QgaW5pdGlhbGl6ZWQgeWV0XG4gKiAgICAgY29uc29sZS5sb2codGhpcy5nZXRNZXNzYWdlKHRoaXMuY29udGVudENoaWxkKSk7XG4gKiAgIH1cbiAqXG4gKiAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAqICAgICAvLyBjb250ZW50Q2hpbGQgaXMgdXBkYXRlZCBhZnRlciB0aGUgY29udGVudCBoYXMgYmVlbiBjaGVja2VkXG4gKiAgICAgY29uc29sZS5sb2coJ0FmdGVyQ29udGVudEluaXQ6ICcgKyB0aGlzLmdldE1lc3NhZ2UodGhpcy5jb250ZW50Q2hpbGQpKTtcbiAqICAgfVxuICpcbiAqICAgcHJpdmF0ZSBnZXRNZXNzYWdlKGNtcDogQ2hpbGRDb21wb25lbnQpOiBzdHJpbmcge1xuICogICAgIHJldHVybiBjbXAgPyBjbXAud2hlcmUgKyAnIGNoaWxkJyA6ICdubyBjaGlsZCc7XG4gKiAgIH1cbiAqIH1cbiAqXG4gKiBAQ29tcG9uZW50KHtcbiAqICAgc2VsZWN0b3I6ICdhcHAnLFxuICogICB0ZW1wbGF0ZTogYFxuICogICAgIDxwYXJlbnQtY21wPlxuICogICAgICAgPGNoaWxkLWNtcCB3aGVyZT1cImNvbnRlbnRcIj48L2NoaWxkLWNtcD5cbiAqICAgICA8L3BhcmVudC1jbXA+YCxcbiAqICAgZGlyZWN0aXZlczogW1BhcmVudENvbXBvbmVudCwgQ2hpbGRDb21wb25lbnRdXG4gKiB9KVxuICogZXhwb3J0IGNsYXNzIEFwcCB7XG4gKiB9XG4gKlxuICogYm9vdHN0cmFwKEFwcCkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBZnRlckNvbnRlbnRJbml0IHsgbmdBZnRlckNvbnRlbnRJbml0KCk7IH1cblxuLyoqXG4gKiBJbXBsZW1lbnQgdGhpcyBpbnRlcmZhY2UgdG8gZ2V0IG5vdGlmaWVkIGFmdGVyIGV2ZXJ5IGNoZWNrIG9mIHlvdXIgZGlyZWN0aXZlJ3MgY29udGVudC5cbiAqXG4gKiAjIyMgRXhhbXBsZSAoW2xpdmUgZGVtb10oaHR0cDovL3BsbmtyLmNvL2VkaXQvdEdkcnl0TkVLUW5lY0lQa0Q3TlU/cD1wcmV2aWV3KSlcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBAQ29tcG9uZW50KHtzZWxlY3RvcjogJ2NoaWxkLWNtcCcsIHRlbXBsYXRlOiBge3t3aGVyZX19IGNoaWxkYH0pXG4gKiBjbGFzcyBDaGlsZENvbXBvbmVudCB7XG4gKiAgIEBJbnB1dCgpIHdoZXJlOiBzdHJpbmc7XG4gKiB9XG4gKlxuICogQENvbXBvbmVudCh7c2VsZWN0b3I6ICdwYXJlbnQtY21wJywgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YH0pXG4gKiBjbGFzcyBQYXJlbnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcbiAqICAgQENvbnRlbnRDaGlsZChDaGlsZENvbXBvbmVudCkgY29udGVudENoaWxkOiBDaGlsZENvbXBvbmVudDtcbiAqXG4gKiAgIGNvbnN0cnVjdG9yKCkge1xuICogICAgIC8vIGNvbnRlbnRDaGlsZCBpcyBub3QgaW5pdGlhbGl6ZWQgeWV0XG4gKiAgICAgY29uc29sZS5sb2codGhpcy5nZXRNZXNzYWdlKHRoaXMuY29udGVudENoaWxkKSk7XG4gKiAgIH1cbiAqXG4gKiAgIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcbiAqICAgICAvLyBjb250ZW50Q2hpbGQgaXMgdXBkYXRlZCBhZnRlciB0aGUgY29udGVudCBoYXMgYmVlbiBjaGVja2VkXG4gKiAgICAgY29uc29sZS5sb2coJ0FmdGVyQ29udGVudENoZWNrZWQ6ICcgKyB0aGlzLmdldE1lc3NhZ2UodGhpcy5jb250ZW50Q2hpbGQpKTtcbiAqICAgfVxuICpcbiAqICAgcHJpdmF0ZSBnZXRNZXNzYWdlKGNtcDogQ2hpbGRDb21wb25lbnQpOiBzdHJpbmcge1xuICogICAgIHJldHVybiBjbXAgPyBjbXAud2hlcmUgKyAnIGNoaWxkJyA6ICdubyBjaGlsZCc7XG4gKiAgIH1cbiAqIH1cbiAqXG4gKiBAQ29tcG9uZW50KHtcbiAqICAgc2VsZWN0b3I6ICdhcHAnLFxuICogICB0ZW1wbGF0ZTogYFxuICogICAgIDxwYXJlbnQtY21wPlxuICogICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiaGFzQ29udGVudCA9ICFoYXNDb250ZW50XCI+VG9nZ2xlIGNvbnRlbnQgY2hpbGQ8L2J1dHRvbj5cbiAqICAgICAgIDxjaGlsZC1jbXAgKm5nSWY9XCJoYXNDb250ZW50XCIgd2hlcmU9XCJjb250ZW50XCI+PC9jaGlsZC1jbXA+XG4gKiAgICAgPC9wYXJlbnQtY21wPmAsXG4gKiAgIGRpcmVjdGl2ZXM6IFtOZ0lmLCBQYXJlbnRDb21wb25lbnQsIENoaWxkQ29tcG9uZW50XVxuICogfSlcbiAqIGV4cG9ydCBjbGFzcyBBcHAge1xuICogICBoYXNDb250ZW50ID0gdHJ1ZTtcbiAqIH1cbiAqXG4gKiBib290c3RyYXAoQXBwKS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAqIGBgYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFmdGVyQ29udGVudENoZWNrZWQgeyBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTsgfVxuXG4vKipcbiAqIEltcGxlbWVudCB0aGlzIGludGVyZmFjZSB0byBnZXQgbm90aWZpZWQgd2hlbiB5b3VyIGNvbXBvbmVudCdzIHZpZXcgaGFzIGJlZW4gZnVsbHkgaW5pdGlhbGl6ZWQuXG4gKlxuICogIyMjIEV4YW1wbGUgKFtsaXZlIGRlbW9dKGh0dHA6Ly9wbG5rci5jby9lZGl0L0xoVEtWTUVNMGZrSmd5cDRDSTFXP3A9cHJldmlldykpXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogQENvbXBvbmVudCh7c2VsZWN0b3I6ICdjaGlsZC1jbXAnLCB0ZW1wbGF0ZTogYHt7d2hlcmV9fSBjaGlsZGB9KVxuICogY2xhc3MgQ2hpbGRDb21wb25lbnQge1xuICogICBASW5wdXQoKSB3aGVyZTogc3RyaW5nO1xuICogfVxuICpcbiAqIEBDb21wb25lbnQoe1xuICogICBzZWxlY3RvcjogJ3BhcmVudC1jbXAnLFxuICogICB0ZW1wbGF0ZTogYDxjaGlsZC1jbXAgd2hlcmU9XCJ2aWV3XCI+PC9jaGlsZC1jbXA+YCxcbiAqICAgZGlyZWN0aXZlczogW0NoaWxkQ29tcG9uZW50XVxuICogfSlcbiAqIGNsYXNzIFBhcmVudENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICogICBAVmlld0NoaWxkKENoaWxkQ29tcG9uZW50KSB2aWV3Q2hpbGQ6IENoaWxkQ29tcG9uZW50O1xuICpcbiAqICAgY29uc3RydWN0b3IoKSB7XG4gKiAgICAgLy8gdmlld0NoaWxkIGlzIG5vdCBpbml0aWFsaXplZCB5ZXRcbiAqICAgICBjb25zb2xlLmxvZyh0aGlzLmdldE1lc3NhZ2UodGhpcy52aWV3Q2hpbGQpKTtcbiAqICAgfVxuICpcbiAqICAgbmdBZnRlclZpZXdJbml0KCkge1xuICogICAgIC8vIHZpZXdDaGlsZCBpcyB1cGRhdGVkIGFmdGVyIHRoZSB2aWV3IGhhcyBiZWVuIGluaXRpYWxpemVkXG4gKiAgICAgY29uc29sZS5sb2coJ25nQWZ0ZXJWaWV3SW5pdDogJyArIHRoaXMuZ2V0TWVzc2FnZSh0aGlzLnZpZXdDaGlsZCkpO1xuICogICB9XG4gKlxuICogICBwcml2YXRlIGdldE1lc3NhZ2UoY21wOiBDaGlsZENvbXBvbmVudCk6IHN0cmluZyB7XG4gKiAgICAgcmV0dXJuIGNtcCA/IGNtcC53aGVyZSArICcgY2hpbGQnIDogJ25vIGNoaWxkJztcbiAqICAgfVxuICogfVxuICpcbiAqIEBDb21wb25lbnQoe1xuICogICBzZWxlY3RvcjogJ2FwcCcsXG4gKiAgIHRlbXBsYXRlOiBgPHBhcmVudC1jbXA+PC9wYXJlbnQtY21wPmAsXG4gKiAgIGRpcmVjdGl2ZXM6IFtQYXJlbnRDb21wb25lbnRdXG4gKiB9KVxuICogZXhwb3J0IGNsYXNzIEFwcCB7XG4gKiB9XG4gKlxuICogYm9vdHN0cmFwKEFwcCkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBZnRlclZpZXdJbml0IHsgbmdBZnRlclZpZXdJbml0KCk7IH1cblxuLyoqXG4gKiBJbXBsZW1lbnQgdGhpcyBpbnRlcmZhY2UgdG8gZ2V0IG5vdGlmaWVkIGFmdGVyIGV2ZXJ5IGNoZWNrIG9mIHlvdXIgY29tcG9uZW50J3Mgdmlldy5cbiAqXG4gKiAjIyMgRXhhbXBsZSAoW2xpdmUgZGVtb10oaHR0cDovL3BsbmtyLmNvL2VkaXQvMHFER0hjUFFrYzI1Q1hoVE56S1U/cD1wcmV2aWV3KSlcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBAQ29tcG9uZW50KHtzZWxlY3RvcjogJ2NoaWxkLWNtcCcsIHRlbXBsYXRlOiBge3t3aGVyZX19IGNoaWxkYH0pXG4gKiBjbGFzcyBDaGlsZENvbXBvbmVudCB7XG4gKiAgIEBJbnB1dCgpIHdoZXJlOiBzdHJpbmc7XG4gKiB9XG4gKlxuICogQENvbXBvbmVudCh7XG4gKiAgIHNlbGVjdG9yOiAncGFyZW50LWNtcCcsXG4gKiAgIHRlbXBsYXRlOiBgXG4gKiAgICAgPGJ1dHRvbiAoY2xpY2spPVwic2hvd1ZpZXcgPSAhc2hvd1ZpZXdcIj5Ub2dnbGUgdmlldyBjaGlsZDwvYnV0dG9uPlxuICogICAgIDxjaGlsZC1jbXAgKm5nSWY9XCJzaG93Vmlld1wiIHdoZXJlPVwidmlld1wiPjwvY2hpbGQtY21wPmAsXG4gKiAgIGRpcmVjdGl2ZXM6IFtOZ0lmLCBDaGlsZENvbXBvbmVudF1cbiAqIH0pXG4gKiBjbGFzcyBQYXJlbnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdDaGVja2VkIHtcbiAqICAgQFZpZXdDaGlsZChDaGlsZENvbXBvbmVudCkgdmlld0NoaWxkOiBDaGlsZENvbXBvbmVudDtcbiAqICAgc2hvd1ZpZXcgPSB0cnVlO1xuICpcbiAqICAgY29uc3RydWN0b3IoKSB7XG4gKiAgICAgLy8gdmlld0NoaWxkIGlzIG5vdCBpbml0aWFsaXplZCB5ZXRcbiAqICAgICBjb25zb2xlLmxvZyh0aGlzLmdldE1lc3NhZ2UodGhpcy52aWV3Q2hpbGQpKTtcbiAqICAgfVxuICpcbiAqICAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICogICAgIC8vIHZpZXdDaGlsZCBpcyB1cGRhdGVkIGFmdGVyIHRoZSB2aWV3IGhhcyBiZWVuIGNoZWNrZWRcbiAqICAgICBjb25zb2xlLmxvZygnQWZ0ZXJWaWV3Q2hlY2tlZDogJyArIHRoaXMuZ2V0TWVzc2FnZSh0aGlzLnZpZXdDaGlsZCkpO1xuICogICB9XG4gKlxuICogICBwcml2YXRlIGdldE1lc3NhZ2UoY21wOiBDaGlsZENvbXBvbmVudCk6IHN0cmluZyB7XG4gKiAgICAgcmV0dXJuIGNtcCA/IGNtcC53aGVyZSArICcgY2hpbGQnIDogJ25vIGNoaWxkJztcbiAqICAgfVxuICogfVxuICpcbiAqIEBDb21wb25lbnQoe1xuICogICBzZWxlY3RvcjogJ2FwcCcsXG4gKiAgIHRlbXBsYXRlOiBgPHBhcmVudC1jbXA+PC9wYXJlbnQtY21wPmAsXG4gKiAgIGRpcmVjdGl2ZXM6IFtQYXJlbnRDb21wb25lbnRdXG4gKiB9KVxuICogZXhwb3J0IGNsYXNzIEFwcCB7XG4gKiB9XG4gKlxuICogYm9vdHN0cmFwKEFwcCkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBZnRlclZpZXdDaGVja2VkIHsgbmdBZnRlclZpZXdDaGVja2VkKCk7IH1cbiJdfQ==