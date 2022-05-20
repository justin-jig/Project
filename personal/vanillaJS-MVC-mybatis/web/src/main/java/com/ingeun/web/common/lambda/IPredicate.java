package com.ingeun.web.common.lambda;

/**
 * IPredicate
 */
@FunctionalInterface
public interface IPredicate {

    public abstract boolean test(Object o);
    
}