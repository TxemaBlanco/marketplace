package org.factoriaf5.comicbooks.orders;

import java.io.Serializable;
import java.util.Objects;

public class OrderPK implements Serializable{
    private static final long serialVersionUID = 1L;

    private String customerEmail;
    private String comicIsbn;

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null) return false;
        if (getClass() != obj.getClass()) return false;
        OrderPK other = (OrderPK) obj;
        return Objects.equals(comicIsbn,other.comicIsbn) && Objects.equals(customerEmail, other.customerEmail);
    }
    @Override
    public int hashCode() {
        return Objects.hash(comicIsbn, customerEmail);
    }
    
}
